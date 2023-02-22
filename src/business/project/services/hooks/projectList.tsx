import Dimensions from 'business/project/components/dimensions';
import Project from 'business/project/types';
import RawProject from 'business/project/types/raw';
import { useState } from 'react';
import sanitizeProject from '../sanitizeProject';

const RAW_PROJECTS: RawProject[] = [
  {
    id: 1,
    name: 'Infinite Cube',
    component: <Dimensions />,
    isTitleNeeded: true,
    informations: {
      date: new Date(2022, 0),
      technos: ['React', 'Three.js'],
      inspirations: [
        {
          link: 'https://numbersinmotion.tumblr.com/post/157226693561/up-down',
          name: 'Numbers in Motion',
        },
      ],
      source:
        'https://github.com/JulienRst/Playground/blob/master/src/components/sandbox/InfiniteCube.vue',
    },
  },
];

export default function useProjectList(): Project[] {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    setProjects(RAW_PROJECTS.map((rawProject) => sanitizeProject(rawProject)));
    setLoaded(true);
  }

  return projects;
}
