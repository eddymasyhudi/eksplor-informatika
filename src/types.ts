export type GradeLevel = 'SMP' | 'SMA';

export interface Module {
  id: string;
  title: string;
  description: string;
  grade: GradeLevel;
  icon: string;
  hasVideo: boolean;
  hasPdf: boolean;
  hasSlide: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  grade: GradeLevel;
  deadline: string;
  status: 'active' | 'completed' | 'upcoming';
  submitLink?: string;
}

export interface Assessment {
  id: string;
  title: string;
  type: 'Quiz' | 'UTS' | 'UAS' | 'Tryout';
  grade: GradeLevel;
  description: string;
  link: string;
}
