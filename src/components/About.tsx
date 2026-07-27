import Section from './ui/Section';
import Tag from './ui/Tag';
import { about } from '../data/profile';
import { skills } from '../data/skills';

export default function About() {
  return (
    <Section id="about" label="01 / About" title="What I work on">
      <div className="max-w-prose space-y-5">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="leading-relaxed text-fg-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-14 space-y-6">
        <h3 className="label-mono text-fg-faint">Skills</h3>
        <dl className="space-y-5">
          {skills.map(({ label, items }) => (
            <div key={label} className="sm:flex sm:gap-6">
              <dt className="label-mono mb-2 shrink-0 pt-1.5 text-fg-faint sm:mb-0 sm:w-24">
                {label}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
