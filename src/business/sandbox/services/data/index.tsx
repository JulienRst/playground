import AstralBoxes from 'business/sandbox/components/astral-boxes';
import Dimensions from 'business/sandbox/components/dimensions';
import Inceptcard from 'business/sandbox/components/inceptcard';
import InfiniteCube from 'business/sandbox/components/infinite-cube';
import Rings from 'business/sandbox/components/rings';
import RoadLight from 'business/sandbox/components/road-light';
import Spaceships from 'business/sandbox/components/spaceships';
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
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/infinite-cube/index.tsx',
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
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/twerking-triangle/index.tsx',
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
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/triangle-party/index.tsx',
    },
  },
  {
    id: 4,
    name: 'Road Light',
    component: <RoadLight />,
    isTitleNeeded: false,
    informations: {
      date: new Date(2021, 4),
      technos: ['React', 'Three.js'],
      inspirations: [
        {
          link: 'https://tympanus.net/Tutorials/InfiniteLights/',
          name: 'Codrops',
        },
      ],
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/road-light/index.tsx',
    },
  },
  {
    id: 5,
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
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/dimensions/index.tsx',
    },
  },
  {
    id: 6,
    name: 'Inceptcard',
    component: <Inceptcard />,
    isTitleNeeded: false,
    informations: {
      date: new Date(2021, 3),
      technos: ['React', 'Three.js'],
      inspirations: [
        {
          link: 'https://twitter.com/robbietilton/status/1325099751746932738',
          name: "Robbie Tilton's Trading Card",
        },
      ],
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/inceptcard/index.tsx',
    },
  },
  {
    id: 7,
    name: 'Dancing Rings',
    component: <Rings />,
    isTitleNeeded: false,
    informations: {
      date: new Date(2023, 3),
      technos: ['React', 'Three.js'],
      inspirations: [
        {
          link: 'https://twitter.com/Damian_Kidd/status/1592230891266392064',
          name: 'Damian Kidd - Zero, Three Sixty',
        },
      ],
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/rings/index.tsx',
    },
  },
  {
    id: 8,
    name: 'Astral Boxes',
    component: <AstralBoxes />,
    isTitleNeeded: false,
    informations: {
      date: new Date(2023, 6),
      technos: ['React', 'Three.js', 'Drei'],
      inspirations: [
        {
          name: '@0xca0a',
          link: 'https://twitter.com/0xca0a/status/1666372175404646405',
        },
        {
          name: 'Magic Box Sandbox',
          link: 'https://codesandbox.io/s/magic-box-drc6qg?file=/src/App.js',
        },
      ],
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/astral-boxes/index.tsx',
    },
  },
  {
    id: 9,
    name: 'Spaceships',
    component: <Spaceships />,
    isTitleNeeded: false,
    informations: {
      date: new Date(2024, 8),
      technos: ['React', 'Three.js', 'Drei'],
      inspirations: [],
      source:
        'https://github.com/JulienRst/playground/blob/main/src/business/sandbox/components/spaceships/index.tsx',
    },
  },
];

export default RAW_EXPERIENCES;
