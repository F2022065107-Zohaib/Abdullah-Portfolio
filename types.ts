
export interface Project {
  id: string;
  title: string;
  category: 'Video' | 'Thumbnail';
  imageUrl: string;
  description: string;
  stats?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export enum Section {
  Hero = 'hero',
  About = 'about',
  Services = 'services',
  Work = 'work',
  Contact = 'contact'
}
