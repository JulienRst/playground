import { Canvas } from '@react-three/fiber';
// import TriangleParty from 'components/triangleParty';
// import TwerkingTriangle from 'components/twerkingTriangle';
// import InfiniteCube from 'components/infiniteCube';
import Dimensions from 'components/dimensions';
import React from 'react';
import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    <div id={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 4, 8] }}>
        <Dimensions />
      </Canvas>
    </div>
  );
};

export default App;
