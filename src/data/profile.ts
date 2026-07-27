export const profile = {
  name: 'Khaled Tujjar',
  tagline: 'Software Developer building systems and data platforms.',
  meta: ['Orlando, FL', 'Sheefra Corporation', "UCF MS CS '27"],
  email: 'ktujjardev@gmail.com',
  github: 'https://github.com/KTujjar',
  linkedin: 'https://www.linkedin.com/in/khaled-tujjar/',
  site: 'https://khaledtujjar.com',
} as const;

/** Bio paragraphs, verbatim from the LinkedIn summary. */
export const about: readonly string[] = [
  'At Sheefra I co-built and help maintain an internal reporting platform for our transportation operations, built in PHP, MySQL, and JavaScript. I cut report times from minutes to seconds by profiling, indexing, and reworking its heaviest queries.',
  'I also added filtering, dashboards, and auditability so non-technical users could get answers out of their data without touching SQL, designed versioned REST APIs with token-based authentication serving three internal apps and 25+ daily users, and co-led our production Linux server migration.',
  'Recently I built an anomaly detection platform on Kafka and async FastAPI, containerized it with Docker, deployed it to Kubernetes with horizontal pod autoscaling, and automated CI/CD in GitHub Actions gating releases on a pytest suite.',
  'Outside of that I have gone deeper into systems software. I built a custom HTTP server in C++ over raw sockets, a text editor backed by a piece table for efficient inserts and deletes, and a Linux tool that traces process and HID events with bpftrace to flag suspicious command execution after a new keyboard is attached. That work pushed me to understand timing, memory behavior, and failure modes instead of settling for something that works on my machine.',
  'I am interested in application software roles where I own problems end to end.',
];
