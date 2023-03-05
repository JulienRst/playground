import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useState, useRef } from 'react';
import { Group, Vector3 } from 'three';
import Triangle from './components/triangle';
import { generateRandomPoint } from './services/generateRandomPoint';

interface TrianglePartyProps {
  delay?: number;
  numberOfPoints?: number;
  size?: number;
}

const TriangleParty: React.FC<TrianglePartyProps> = ({
  numberOfPoints = 30,
  delay = 200,
  size = 5,
}) => {
  const group = useRef<Group>(null);
  const [isInit, setIsInit] = useState(false);
  const [points, setPoints] = useState<Vector3[]>([]);

  if (!isInit) {
    for (let i = 0; i < numberOfPoints; i++) {
      window.setTimeout(() => {
        setPoints((ancientPoints: Vector3[]) => [
          ...ancientPoints,
          generateRandomPoint(size),
        ]);
      }, i * delay);
    }
    setIsInit(true);
  }

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.rotation.z += 0.005;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={new Vector3(0, 0, 15)} />
      <group ref={group}>
        <ambientLight color={0xffffff} />
        {points.length > 2 &&
          points.map((point, i) => {
            const trianglePoints = [point, points[i - 1], points[i - 2], point];
            return i < 2 ? null : <Triangle key={i} points={trianglePoints} />;
          })}
      </group>
    </>
  );
};

export default TriangleParty;
