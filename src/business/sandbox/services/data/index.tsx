import Dimensions from 'business/sandbox/components/dimensions';
import InfiniteCube from 'business/sandbox/components/infiniteCube';
import RawExperience from 'business/sandbox/types/raw';

const RAW_EXPERIENCES: RawExperience[] = [
  {
    id: 1,
    name: 'Cubes Fever',
    component: <InfiniteCube />,
    isTitleNeeded: true,
    informations: {
      date: new Date(2021, 0),
      technos: ['React', 'Three.js'],
      inspirations: [
        {
          link: 'https://numbersinmotion.tumblr.com/post/157226693561/up-down',
          name: 'Numbers in Motion',
        },
      ],
      source: 'https://github.com/JulienRst/Playgournd/blob/master/',
    },
  },
  {
    id: 2,
    name: 'Dimension(s)',
    component: <Dimensions />,
    isTitleNeeded: false,
    informations: {
      date: new Date(2021, 3),
      technos: ['React', 'Three.js'],
      inspirations: [
        {
          link: 'https://twitter.com/mattdesl/status/1381373529980084226',
          name: 'Matt DesLauriers',
        },
      ],
      source: 'https://github.com/JulienRst/Playgournd/blob/master/',
    },
  },
];

export default RAW_EXPERIENCES;
