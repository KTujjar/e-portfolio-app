export interface Role {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: readonly string[];
}

export const experience: readonly Role[] = [
  {
    company: 'Sheefra Corporation',
    title: 'Software Developer',
    location: 'Orlando, FL',
    start: 'August 2023',
    end: 'Present',
    bullets: [
      'Co-built and maintain TransTrack, a full-stack PHP, MySQL, and JavaScript app saving staff 10+ hours weekly',
      'Cut report times from minutes to seconds by profiling, indexing, and restructuring its heaviest queries',
      'Designed versioned REST APIs with token-based authentication, serving three internal apps and 25+ daily users',
      'Co-led the production Linux server migration and administer its backups, monitoring, and security patching',
      'Developed a desktop time-clock app for remote workers using C++ and MySQL, reducing payroll errors by 80%',
    ],
  },
];
