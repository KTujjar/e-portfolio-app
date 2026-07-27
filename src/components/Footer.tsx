import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

const links = [
  { label: 'GitHub', href: profile.github, Icon: FiGithub },
  { label: 'LinkedIn', href: profile.linkedin, Icon: FiLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono text-fg-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <ul className="flex items-center gap-3">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex size-11 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:border-border-strong hover:bg-surface hover:text-accent"
              >
                {/* Label lives on aria-label — the glyph itself is decorative */}
                <Icon size={22} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
