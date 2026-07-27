export interface Project {
  name: string;
  blurb: string;
  tags: readonly string[];
  href: string;
  hrefLabel: string;
}

/**
 * Ordered to lead with the systems and data-platform work, which is the
 * strongest signal for the roles being targeted.
 */
export const projects: readonly Project[] = [
  {
    name: 'Anomaly Detection Platform',
    blurb:
      'A streaming service that flags anomalies in live event data, built on Kafka and async FastAPI. I prototyped an LSTM autoencoder, containerized the service with Docker, and deployed it to Kubernetes with CI/CD in GitHub Actions.',
    tags: ['Python', 'Apache Kafka', 'FastAPI', 'PyTorch', 'Docker', 'Kubernetes', 'CI/CD'],
    href: 'https://github.com/KTujjar/anomaly-detection',
    hrefLabel: 'GitHub',
  },
  {
    name: 'HID Behavior Detector',
    blurb:
      'A Linux tool that flags suspicious command execution after a new USB keyboard is attached. It collects process and HID events with bpftrace and udev, scores them in a C++ analyzer, and surfaces explainable reports in a desktop app.',
    tags: ['Python', 'C++', 'Linux', 'eBPF', 'CMake', 'Threat Detection'],
    href: 'https://github.com/KTujjar/hid-behavior-detector',
    hrefLabel: 'GitHub',
  },
  {
    name: 'N-Body Particle Renderer',
    blurb:
      'A real time 3D gravitational simulation of 2,000 particles in C++17 and OpenGL 3.3. I wrote the O(n²) physics core and render pipeline by hand and verified accuracy with energy conservation checks.',
    tags: ['C++', 'OpenGL', 'GLSL', 'CMake', '3D Graphics'],
    href: 'https://github.com/KTujjar/nbody-renderer',
    hrefLabel: 'GitHub',
  },
  {
    name: 'RocketDocs',
    blurb:
      'RocketDocs is an AI powered code documentation generator that lets you create and talk to your documentation. I built the single page React front end in TypeScript and TailwindCSS, and added doc templates and a review queue.',
    tags: ['TypeScript', 'React.js', 'TailwindCSS', 'Single Page Applications', 'Git'],
    href: 'https://github.com/ryanata/rocketdocs-frontend',
    hrefLabel: 'GitHub',
  },
  {
    name: 'Pwdly',
    blurb:
      'Pwdly is a web and mobile password manager with vault encryption and master password gating. I co-built it with a teammate in React Native and Expo, sharing components across mobile and web.',
    tags: ['React Native', 'Expo', 'JavaScript', 'React.js', 'Mobile Application Development'],
    href: 'https://github.com/ryanata/password-manager',
    hrefLabel: 'GitHub',
  },
  {
    name: 'CardGame2D',
    blurb:
      'A Balatro inspired 2D card game in C++ and SDL3 with poker style scoring. Players select, play, and discard cards against real time scoring and animations, built with CMake and shipped as a Windows release.',
    tags: ['C++', 'SDL', 'CMake', 'Game Development', 'Git'],
    href: 'https://github.com/KTujjar/CardGame2D',
    hrefLabel: 'GitHub',
  },
];
