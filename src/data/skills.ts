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
      'LangGraph',
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
      'GitHub Actions',
      'Linux',
      'bpftrace',
      'MySQL',
      'CMake',
    ],
  },
];
