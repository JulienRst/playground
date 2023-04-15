import React, { useRef, useState } from 'react';
import Ring from './components/ring';
import { getRingsData, getRotationFromTimeAndIndex } from './services';
import { useFrame, useThree } from '@react-three/fiber';
import { Group } from 'three';
import { PerspectiveCamera } from '@react-three/drei';

interface RingsProps {
  ringWidth?: number;
  ringsCount?: number;
  loopDuration?: number;
}

const Rings: React.FC<RingsProps> = ({
  ringWidth = 0.03,
  ringsCount = 45,
  loopDuration = 14000,
}) => {
  const groupRef = useRef<Group>(null);
  const { clock } = useThree();
  const [ringsData, setRingsData] = useState(
    getRingsData(ringsCount, ringWidth),
  );
  useFrame(() => {
    if (groupRef.current) {
      const { elapsedTime } = clock;
      setRingsData(
        ringsData.map((ringData, i) => ({
          ...ringData,
          rotation: getRotationFromTimeAndIndex(
            elapsedTime,
            i,
            ringsCount,
            loopDuration,
          ),
        })),
      );

      groupRef.current.rotation.y =
        ((elapsedTime * 1000) / loopDuration) * Math.PI;
    }
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        near={0.1}
        far={60}
        fov={30}
        position={[0, 0, 15]}
      />
      <ambientLight color={0xffffff} intensity={1} />
      <directionalLight color={0xffffff} intensity={2} position={[0, 5, 0]} />
      <directionalLight color={0xffffff} intensity={2} position={[10, 0, 2]} />
      <group ref={groupRef}>
        {ringsData.map((ringData) => (
          <Ring
            rotation={ringData.rotation}
            key={ringData.size}
            size={ringData.size}
            width={ringWidth}
          />
        ))}
      </group>
    </>
  );
};

export default Rings;
