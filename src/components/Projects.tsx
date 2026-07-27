import { FiArrowUpRight } from 'react-icons/fi';
import Section from './ui/Section';
import Tag from './ui/Tag';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section id="projects" label="03 / Work" title="Selected projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-fg">{project.name}</h3>
                <FiArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-fg-faint transition-colors group-hover:text-accent"
                />
              </div>

              <p className="mt-3 grow text-sm leading-relaxed text-fg-muted">
                {project.blurb}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <span className="label-mono mt-5 text-fg-faint group-hover:text-accent">
                {project.hrefLabel}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
