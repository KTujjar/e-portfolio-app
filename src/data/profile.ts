export const profile = {
  name: 'Khaled Tujjar',
  tagline: 'I build systems and data platforms.',
  meta: ['Orlando, FL', 'Sheefra Corporation', "UCF MS CS '27"],
  email: 'ktujjardev@gmail.com',
  github: 'https://github.com/KTujjar',
  linkedin: 'https://www.linkedin.com/in/khaled-tujjar/',
  site: 'https://khaledtujjar.com',
} as const;

/**
 * Bio paragraphs, condensed from the LinkedIn summary (src/assets/about.txt).
 * Specific metrics live in Experience and Projects, so this stays about focus.
 */
export const about: readonly string[] = [
  'At Sheefra I work across the stack on the internal platform our transportation operations run on, from tuning the MySQL queries underneath to the dashboards that let non-technical staff get answers out of their data. Lately I have been building streaming data services and multi-agent AI tools.',
  'I have also gone deeper into systems software, building a custom HTTP server in C++ over raw sockets and a text editor backed by a piece table. That work pushed me to understand timing, memory behavior, and failure modes instead of settling for something that works on my machine.',
];
