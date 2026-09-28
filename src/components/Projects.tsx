import { FiArrowUpRight } from 'react-icons/fi';
import Section from './ui/Section';
import Tag from './ui/Tag';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section id="projects" label="03 / Work" title="Selected projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className={project.featured ? 'md:col-span-2' : undefined}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-full flex-col rounded-lg border bg-surface transition-colors hover:border-border-strong hover:bg-surface-hover ${
                project.featured ? 'border-accent-dim p-6 sm:p-8' : 'border-border p-6'
              }`}
            >
              {project.featured && <p className="label-mono mb-3 text-accent">Featured</p>}

              <h3
                className={`font-medium text-fg ${project.featured ? 'text-xl sm:text-2xl' : ''}`}
              >
                {project.name}
              </h3>

              <p
                className={`mt-3 grow leading-relaxed text-fg-muted ${
                  project.featured ? 'max-w-prose' : 'text-sm'
                }`}
              >
                {project.blurb}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-fg-muted transition-colors group-hover:text-accent">
                View on {project.hrefLabel}
                <FiArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
