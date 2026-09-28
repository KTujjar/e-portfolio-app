export interface Project {
  name: string;
  blurb: string;
  tags: readonly string[];
  href: string;
  hrefLabel: string;
  /** Shown as a full-width card at the top of the grid. */
  featured?: boolean;
}

/**
 * Ordered to lead with the systems and data-platform work, which is the
 * strongest signal for the roles being targeted. Tags are kept to the 3-5
 * technologies most worth asking about.
 */
export const projects: readonly Project[] = [
  {
    name: 'Anomaly Detection Platform',
    blurb:
      'A streaming service that flags anomalies in live event data, built on Kafka and async FastAPI. I prototyped an LSTM autoencoder, containerized the service with Docker, and deployed it to Kubernetes with CI/CD in GitHub Actions.',
    tags: ['Kafka', 'FastAPI', 'PyTorch', 'Docker', 'Kubernetes'],
    href: 'https://github.com/KTujjar/anomaly-detection',
    hrefLabel: 'GitHub',
    featured: true,
  },
  {
    name: 'MARA',
    blurb:
      'A multi agent research assistant where Claude agents plan the research, search the web and local documents, fact check their own findings, and write a final report. I wired the agents together as a LangGraph state machine behind a FastAPI backend that streams progress to a React front end.',
    tags: ['Python', 'LangGraph', 'Claude API', 'FastAPI', 'React'],
    href: 'https://github.com/KTujjar/MARA',
    hrefLabel: 'GitHub',
  },
  {
    name: 'HID Behavior Detector',
    blurb:
      'A Linux tool that flags suspicious command execution after a new USB keyboard is attached. It collects process and HID events with bpftrace and udev, scores them in a C++ analyzer, and surfaces explainable reports in a desktop app.',
    tags: ['C++', 'Python', 'eBPF', 'Linux'],
    href: 'https://github.com/KTujjar/hid-behavior-detector',
    hrefLabel: 'GitHub',
  },
  {
    name: 'N-Body Particle Renderer',
    blurb:
      'A real time 3D gravitational simulation of 2,000 particles in C++17 and OpenGL 3.3. I wrote the O(n²) physics core and render pipeline by hand and verified accuracy with energy conservation checks.',
    tags: ['C++', 'OpenGL', 'GLSL', 'CMake'],
    href: 'https://github.com/KTujjar/nbody-renderer',
    hrefLabel: 'GitHub',
  },
  {
    name: 'RocketDocs',
    blurb:
      'RocketDocs is an AI powered code documentation generator that lets you create and talk to your documentation. I built the single page React front end in TypeScript and TailwindCSS, and added doc templates and a review queue.',
    tags: ['TypeScript', 'React', 'TailwindCSS'],
    href: 'https://github.com/ryanata/rocketdocs-frontend',
    hrefLabel: 'GitHub',
  },
  {
    name: 'Pwdly',
    blurb:
      'Pwdly is a web and mobile password manager with vault encryption and master password gating. I co-built it with a teammate in React Native and Expo, sharing components across mobile and web.',
    tags: ['React Native', 'Expo', 'JavaScript'],
    href: 'https://github.com/ryanata/password-manager',
    hrefLabel: 'GitHub',
  },
  {
    name: 'CardGame2D',
    blurb:
      'A Balatro inspired 2D card game in C++ and SDL3 with poker style scoring. Players select, play, and discard cards against real time scoring and animations, built with CMake and shipped as a Windows release.',
    tags: ['C++', 'SDL3', 'CMake'],
    href: 'https://github.com/KTujjar/CardGame2D',
    hrefLabel: 'GitHub',
  },
];
