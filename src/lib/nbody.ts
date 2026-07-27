/**
 * A 2D reduction of the N-Body Particle Renderer (C++17 / OpenGL 3.3).
 *
 * Same shape as the original: direct O(n²) pairwise gravity with Plummer
 * softening, integrated semi-implicitly. Bodies are seeded on near-circular
 * orbits around a central mass so the system stays visually bounded without
 * needing collision handling or re-seeding.
 */

export interface NBodyOptions {
  /** Number of orbiting bodies. */
  count: number;
  /** Gravitational constant, tuned for pixel-space rather than SI units. */
  g: number;
  /** Plummer softening length, in pixels. Prevents singularities at r → 0. */
  softening: number;
  /** Mass of the fixed central attractor. */
  centralMass: number;
}

export const DEFAULT_OPTIONS: NBodyOptions = {
  count: 180,
  g: 1400,
  softening: 90,
  centralMass: 26,
};

export interface NBodyState {
  /** Positions, velocities, and masses as flat arrays (x0, y0, x1, y1, …). */
  pos: Float32Array;
  vel: Float32Array;
  mass: Float32Array;
  count: number;
  width: number;
  height: number;
  options: NBodyOptions;
}

/**
 * Seeds bodies in an annulus around the centre, each with the tangential
 * velocity for a circular orbit at its radius (v = sqrt(GM / r)), plus a
 * small random perturbation so the disc shears over time instead of
 * rotating rigidly.
 */
export function createState(
  width: number,
  height: number,
  options: NBodyOptions = DEFAULT_OPTIONS,
): NBodyState {
  const { count, g, centralMass } = options;
  const pos = new Float32Array(count * 2);
  const vel = new Float32Array(count * 2);
  const mass = new Float32Array(count);

  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = Math.min(width, height) * 0.46;
  const minRadius = Math.min(width, height) * 0.08;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    // sqrt distribution gives uniform area density rather than a dense core
    const radius = minRadius + Math.sqrt(Math.random()) * (maxRadius - minRadius);

    pos[i * 2] = cx + Math.cos(angle) * radius;
    pos[i * 2 + 1] = cy + Math.sin(angle) * radius;

    const orbital = Math.sqrt((g * centralMass) / radius);
    const jitter = 0.9 + Math.random() * 0.2;

    // Perpendicular to the radius vector → circular orbit
    vel[i * 2] = -Math.sin(angle) * orbital * jitter;
    vel[i * 2 + 1] = Math.cos(angle) * orbital * jitter;

    mass[i] = 0.4 + Math.random() * 0.8;
  }

  return { pos, vel, mass, count, width, height, options };
}

/**
 * Advances the simulation by `dt` seconds.
 *
 * Accelerations come from every pair (computed once per pair and applied with
 * opposite signs, Newton's third law) plus the fixed central mass. Velocities
 * are updated before positions — semi-implicit Euler, which is symplectic and
 * so does not bleed energy the way explicit Euler does.
 */
export function step(state: NBodyState, dt: number): void {
  const { pos, vel, mass, count, width, height, options } = state;
  const { g, softening, centralMass } = options;

  const soft2 = softening * softening;
  const cx = width / 2;
  const cy = height / 2;

  const ax = new Float32Array(count);
  const ay = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const xi = pos[i * 2];
    const yi = pos[i * 2 + 1];

    for (let j = i + 1; j < count; j++) {
      const dx = pos[j * 2] - xi;
      const dy = pos[j * 2 + 1] - yi;

      const dist2 = dx * dx + dy * dy + soft2;
      const invDist = 1 / Math.sqrt(dist2);
      // f = G / (r² + ε²), split into the shared scalar and each body's mass
      const f = (g * invDist * invDist) * invDist;

      ax[i] += f * dx * mass[j];
      ay[i] += f * dy * mass[j];
      ax[j] -= f * dx * mass[i];
      ay[j] -= f * dy * mass[i];
    }

    // Central attractor, fixed at the canvas centre
    const dxc = cx - xi;
    const dyc = cy - yi;
    const distc2 = dxc * dxc + dyc * dyc + soft2;
    const invDistc = 1 / Math.sqrt(distc2);
    const fc = g * centralMass * invDistc * invDistc * invDistc;

    ax[i] += fc * dxc;
    ay[i] += fc * dyc;
  }

  for (let i = 0; i < count; i++) {
    vel[i * 2] += ax[i] * dt;
    vel[i * 2 + 1] += ay[i] * dt;
    pos[i * 2] += vel[i * 2] * dt;
    pos[i * 2 + 1] += vel[i * 2 + 1] * dt;
  }

  // A body that slingshots out is re-seeded rather than left to drift forever
  const escapeRadius = Math.max(width, height);
  for (let i = 0; i < count; i++) {
    const dx = pos[i * 2] - cx;
    const dy = pos[i * 2 + 1] - cy;
    if (dx * dx + dy * dy > escapeRadius * escapeRadius) {
      reseed(state, i);
    }
  }
}

function reseed(state: NBodyState, i: number): void {
  const { pos, vel, width, height, options } = state;
  const { g, centralMass } = options;

  const cx = width / 2;
  const cy = height / 2;
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.min(width, height) * (0.15 + Math.random() * 0.3);

  pos[i * 2] = cx + Math.cos(angle) * radius;
  pos[i * 2 + 1] = cy + Math.sin(angle) * radius;

  const orbital = Math.sqrt((g * centralMass) / radius);
  vel[i * 2] = -Math.sin(angle) * orbital;
  vel[i * 2 + 1] = Math.cos(angle) * orbital;
}

/** Rescales positions and re-centres when the canvas changes size. */
export function resize(state: NBodyState, width: number, height: number): void {
  const scaleX = state.width > 0 ? width / state.width : 1;
  const scaleY = state.height > 0 ? height / state.height : 1;

  for (let i = 0; i < state.count; i++) {
    state.pos[i * 2] *= scaleX;
    state.pos[i * 2 + 1] *= scaleY;
  }

  state.width = width;
  state.height = height;
}
