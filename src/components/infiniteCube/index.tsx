import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Group } from 'three';
import Cube from './components/cube';
import { calcDistFromIndex } from './services/calcDistFromIndex';
import { easeInOut } from './services/easeInOut';
import { initCubeData } from './services/initCubeData';

interface InfiniteCubeProps {
  numberPerSide?: number;
  cubeSize?: number;
  loopDuration?: number;
  offset?: number;
}

const InfiniteCube: React.FC<InfiniteCubeProps> = ({
  numberPerSide = 13,
  cubeSize = 0.4,
  loopDuration = 1500,
  offset = 4,
}) => {
  let currentTime = 0;
  const frameRate = 1000 / 80;
  const group = useRef<Group>(null);
  const cubeDatas = initCubeData(numberPerSide, cubeSize);

  useFrame(() => {
    if (group.current) {
      currentTime += frameRate;
      if (currentTime >= loopDuration) {
        currentTime = 0;
        group.current.position.y = 0;
        group.current.children.forEach((cube) => {
          cube.position.y = 0;
        });
      }
      group.current.children.forEach((cube, i) => {
        const ratioDist =
          calcDistFromIndex(i, numberPerSide) /
          calcDistFromIndex(numberPerSide * numberPerSide, numberPerSide);
        const timeDist = currentTime / loopDuration;
        if (ratioDist < timeDist) {
          cube.position.y = easeInOut(
            currentTime - ratioDist * loopDuration,
            0,
            offset,
            loopDuration - ratioDist * loopDuration,
          );
        }
      });
      group.current.rotation.y -= 0.005;
      group.current.position.y -= offset / (loopDuration / frameRate);
    }
  });

  return (
    <group ref={group}>
      {cubeDatas.map((cubeData, index) => (
        <Cube key={index} {...cubeData} />
      ))}
    </group>
  );
};

export default InfiniteCube;
