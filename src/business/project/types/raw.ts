import { ReactElement } from 'react';

type Techno = 'Three.js' | 'React';

interface Informations {
  date: Date;
  technos: Techno[];
  inspirations: Array<{
    link: string;
    name: string;
  }>;
  source: string;
}

export default interface RawProject {
  id: number;
  name: string;
  component: ReactElement;
  isTitleNeeded: boolean;
  informations: Informations;
}
