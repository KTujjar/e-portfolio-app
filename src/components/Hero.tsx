import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import NBodyCanvas from './NBodyCanvas';
import { profile } from '../data/profile';
import resume from '../assets/resume.pdf';
import portrait from '../assets/portrait.webp';

const actions = [
  { href: profile.github, label: 'GitHub', Icon: FiGithub, external: true },
  { href: profile.linkedin, label: 'LinkedIn', Icon: FiLinkedin, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: FiMail, external: false },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <NBodyCanvas />

      {/* Keeps the simulation from competing with the type */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg"
      />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-32">
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
          <div>
            <p className="eyebrow mb-6 text-accent">Software Developer</p>

            <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
              {profile.tagline}
            </p>
          </div>

          <img
            src={portrait}
            alt={profile.name}
            width={640}
            height={640}
            className="size-32 shrink-0 rounded-full object-cover grayscale ring-1 ring-border sm:size-48"
          />
        </div>

        <ul className="label-mono mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-fg-faint">
          {profile.meta.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={resume}
            download="Khaled-Tujjar-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            <FiDownload size={16} aria-hidden="true" />
            Resume
          </a>

          {actions.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="label-mono mt-20 inline-flex items-center gap-2 self-start text-fg-faint transition-colors hover:text-accent"
        >
          Scroll
          <FiArrowDownRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
