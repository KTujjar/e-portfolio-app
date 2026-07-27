export interface Degree {
  school: string;
  degree: string;
  detail?: string;
  date: string;
}

export const education: readonly Degree[] = [
  {
    school: 'University of Central Florida',
    degree: 'Master of Science in Computer Science',
    date: 'Expected August 2027',
  },
];
