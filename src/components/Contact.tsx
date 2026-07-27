import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Section from './ui/Section';
import { profile } from '../data/profile';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;

const elsewhere = [
  { label: 'GitHub', href: profile.github, display: 'github.com/KTujjar' },
  { label: 'LinkedIn', href: profile.linkedin, display: 'in/khaled-tujjar' },
];

const fieldClass =
  'w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-accent focus:outline-none';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: name, from_email: email, to_name: 'Khaled', message },
        publicKey,
      );
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" label="04 / Contact" title="Get in touch">
      <div className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <form onSubmit={sendEmail} className="space-y-5">
          <p className="max-w-prose text-fg-muted">
            If you have an opportunity, a question, or just want to say hello, send me a
            message.
          </p>

          <div>
            <label htmlFor="name" className="label-mono mb-2 block text-fg-faint">
              Name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="label-mono mb-2 block text-fg-faint">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="label-mono mb-2 block text-fg-faint">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={`${fieldClass} resize-y`}
              placeholder="What's on your mind?"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p aria-live="polite" className="text-sm">
              {status === 'sent' && (
                <span className="text-accent">Thanks — I'll get back to you.</span>
              )}
              {status === 'error' && (
                <span className="text-fg-muted">
                  Something went wrong. Email me directly instead.
                </span>
              )}
            </p>
          </div>
        </form>

        <div className="space-y-8 md:w-56">
          <div>
            <h3 className="label-mono mb-2 text-fg-faint">Email</h3>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-fg transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <h3 className="label-mono mb-2 text-fg-faint">Elsewhere</h3>
            <ul className="space-y-2">
              {elsewhere.map(({ label, href, display }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg transition-colors hover:text-accent"
                  >
                    {display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
