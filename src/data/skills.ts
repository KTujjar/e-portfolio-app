export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export const skills: readonly SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'C', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'PHP', 'GLSL'],
  },
  {
    label: 'Frameworks',
    items: [
      'React',
      'React Native',
      'Expo',
      'FastAPI',
      'PyTorch',
      'OpenGL',
      'TailwindCSS',
      'pytest',
    ],
  },
  {
    label: 'Tools',
    items: [
      'Docker',
      'Kubernetes',
      'Kafka',
      'Git',
      'GitHub Actions',
      'Linux',
      'UNIX',
      'bpftrace',
      'MySQL',
      'CMake',
      'npm',
      'pip',
    ],
  },
];
