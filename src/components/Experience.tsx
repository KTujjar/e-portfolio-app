import Section from './ui/Section';
import { experience } from '../data/experience';
import { education } from '../data/education';

export default function Experience() {
  return (
    <Section id="experience" label="02 / Background" title="Experience & education">
      <ol className="space-y-10">
        {experience.map((role) => (
          <li key={`${role.company}-${role.title}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium text-fg">
                {role.title}
                <span className="text-fg-muted"> · {role.company}</span>
              </h3>
              <p className="label-mono shrink-0 text-fg-faint">
                {role.start} – {role.end}
              </p>
            </div>

            <p className="label-mono mt-1 text-fg-faint">{role.location}</p>

            <ul className="mt-5 space-y-2.5">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-relaxed text-fg-muted">
                  <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent-dim" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14 border-t border-border/60 pt-10">
        <h3 className="label-mono mb-6 text-fg-faint">Education</h3>
        <ol className="space-y-5">
          {education.map((degree) => (
            <li
              key={degree.degree}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-medium text-fg">{degree.degree}</p>
                <p className="text-sm text-fg-muted">
                  {degree.school}
                  {degree.detail && ` · ${degree.detail}`}
                </p>
              </div>
              <p className="label-mono shrink-0 text-fg-faint">{degree.date}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
