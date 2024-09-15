export interface Quiz {
  id: number;
  title: string;
  icon: string;
  clr: string;
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    icon: 'html',
    title: 'HTML',
    clr: '#FFF1E9',
  },
  {
    id: 2,
    icon: 'css',
    title: 'CSS',
    clr: '#E0FDEF',
  },
  {
    id: 3,
    icon: 'js',
    title: 'JavaScript',
    clr: '#EBF0FF',
  },
  {
    id: 4,
    icon: 'accessibility',
    title: 'Accessibility',
    clr: '#F6E7FF',
  },
];
