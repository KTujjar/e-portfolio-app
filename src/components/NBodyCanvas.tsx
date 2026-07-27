import { useEffect, useRef } from 'react';
import { createState, resize, step, type NBodyState } from '../lib/nbody';

const ACCENT = '#35d07f';
/** Physics runs at a fixed step so behaviour is frame-rate independent. */
const FIXED_DT = 1 / 120;
/** Never integrate more than this much wall time in one frame. */
const MAX_FRAME_TIME = 0.05;

/**
 * Decorative hero background: a 2D port of the N-Body Particle Renderer.
 *
 * Pauses when the tab is hidden or the canvas scrolls out of view, and
 * renders a single static frame when the user prefers reduced motion.
 */
export default function NBodyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let state: NBodyState | null = null;
    let frame = 0;
    let lastTime = 0;
    let accumulator = 0;
    let visible = true;
    let onScreen = true;

    const draw = () => {
      if (!state) return;
      const { width, height } = state;

      // Trail: fade the previous frame instead of clearing it outright
      ctx.fillStyle = 'rgba(11, 11, 12, 0.24)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = ACCENT;
      for (let i = 0; i < state.count; i++) {
        const x = state.pos[i * 2];
        const y = state.pos[i * 2 + 1];
        const r = 0.7 + state.mass[i] * 0.9;

        ctx.globalAlpha = 0.18 + state.mass[i] * 0.22;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);
      if (!state) return;

      // Clamp so a backgrounded tab does not integrate a huge dt on resume
      const elapsed = Math.min((time - lastTime) / 1000, MAX_FRAME_TIME);
      lastTime = time;
      accumulator += elapsed;

      while (accumulator >= FIXED_DT) {
        step(state, FIXED_DT);
        accumulator -= FIXED_DT;
      }

      draw();
    };

    const start = () => {
      if (frame || reducedMotion) return;
      lastTime = performance.now();
      accumulator = 0;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const sync = () => {
      if (visible && onScreen) start();
      else stop();
    };

    const applySize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!state) {
        state = createState(width, height);
      } else {
        resize(state, width, height);
      }

      ctx.fillStyle = '#0b0b0c';
      ctx.fillRect(0, 0, width, height);
      draw();
    };

    applySize();

    if (reducedMotion) {
      // One static frame, no loop.
      for (let i = 0; i < 240; i++) step(state!, FIXED_DT);
      draw();
      const ro = new ResizeObserver(applySize);
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    const resizeObserver = new ResizeObserver(applySize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(canvas);

    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
      sync();
    };
    document.addEventListener('visibilitychange', onVisibility);

    sync();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
