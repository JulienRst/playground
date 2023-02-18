import { Canvas } from '@react-three/fiber';
import RotatingCube from 'components/rotatingCube';
import React from 'react';
import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    <div id={styles.canvasContainer}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default App;
