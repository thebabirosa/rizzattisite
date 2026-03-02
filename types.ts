
export interface Project {
  id: string;
  title: string;
  category: 'Cozinha' | 'Dormitório' | 'Sala' | 'Móveis Soltos' | 'Comercial';
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum SectionId {
  Home = 'home',
  Solution = 'solucao',
  Process = 'processo',
  Portfolio = 'portfolio',
  About = 'sobre',
  Contact = 'contato',
  Consultant = 'consultor'
}