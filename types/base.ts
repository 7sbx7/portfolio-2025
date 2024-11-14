export type LinkIcon = {
  icon: Array<string> | string;
  link: string;
};

export type experienceItem = {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
};

export type techItem = {
  name: string;
  iconUrl: string;
};

export type experienceType = 'work' | 'education';
