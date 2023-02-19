import { PerspectiveCamera } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector3 } from 'three';
import Box from './components/box';
import { initBoxDatas } from './services/initBoxDatas';
import { timeToMovement } from './services/timeToMovement';

interface DimensionsProps {
  speed?: number;
  numberOfStrokes?: number;
  amplitude?: number;
}
const Dimensions: React.FC<DimensionsProps> = ({
  speed = 1.2,
  numberOfStrokes = 7,
  amplitude = 3,
}) => {
  const { camera, clock } = useThree();
  camera.lookAt(0, 0, 0);
  const [boxDatas, setBoxDatas] = useState(initBoxDatas(numberOfStrokes));

  useFrame(() => {
    const time = clock.elapsedTime * speed;
    setBoxDatas(
      boxDatas.map((boxData, i) => {
        const tDelta = time - (Math.PI / numberOfStrokes / 1.5) * i;
        return {
          position: boxData.position,
          size: new Vector3(
            timeToMovement(tDelta) * amplitude,
            timeToMovement(tDelta) * amplitude,
            timeToMovement(tDelta + Math.PI) * 0.5,
          ),
        };
      }),
    );
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 8, 12]} />
      {boxDatas.map(({ position, size }, i) => (
        <Box key={i} position={position} size={size} />
      ))}
    </>
  );
};

export default Dimensions;
