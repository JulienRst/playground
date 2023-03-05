import Dimensions from 'business/sandbox/components/dimensions';
import InfiniteCube from 'business/sandbox/components/infinite-cube';
import RoadLight from 'business/sandbox/components/road-light';
import TriangleParty from 'business/sandbox/components/triangle-party';
import TwerkingTriangle from 'business/sandbox/components/twerking-triangle';
import RawExperience from 'business/sandbox/types/raw';

const RAW_EXPERIENCES: RawExperience[] = [
  {
    id: 1,
    name: 'Cubes Fever',
    component: <InfiniteCube />,
    isTitleNeeded: true,
    informations: {
      date: new Date(2020, 0),
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
    name: 'Twerking Triangles',
    component: <TwerkingTriangle />,
    isTitleNeeded: true,
    informations: {
      date: new Date(2020, 0),
      technos: ['React', 'Three.js'],
      inspirations: [],
      source: 'https://github.com/JulienRst/Playgournd/blob/master/',
    },
  },
  {
    id: 3,
    name: 'Triangles Party',
    component: <TriangleParty />,
    isTitleNeeded: true,
    informations: {
      date: new Date(2020, 1),
      technos: ['React', 'Three.js'],
      inspirations: [],
      source: 'https://github.com/JulienRst/Playgournd/blob/master/',
    },
  },
  {
    id: 4,
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
  {
    id: 5,
    name: 'Road Light',
    component: <RoadLight />,
    isTitleNeeded: false,
    informations: {
      date: new Date(2021, 4),
      technos: ['React', 'Three.js'],
      inspirations: [],
      source: 'https://github.com/JulienRst/Playgournd/blob/master/',
    },
  },
];

export default RAW_EXPERIENCES;
