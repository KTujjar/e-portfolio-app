import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  /** Mono uppercase eyebrow above the heading. */
  label: string;
  title: string;
  children: ReactNode;
}

/**
 * Shared section shell — consistent width, rhythm, and heading treatment.
 * Every content section on the page uses this.
 */
export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <p className="eyebrow mb-3 text-accent">{label}</p>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
