import { Canvas } from '@react-three/fiber';
import InfiniteCube from 'components/infiniteCube';
import React from 'react';
import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    <div id={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 4, 8] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <InfiniteCube />
      </Canvas>
    </div>
  );
};

export default App;
