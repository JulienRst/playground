import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Group, Vector3 } from 'three';
import Triangle from './components/triangle';

interface TwerkingTriangleProps {
  loopDuration?: number;
  triangleSize?: number;
  triangleCount?: number;
  maxDegreeAngle?: number;
  frameRate?: number;
}

const TwerkingTriangle: React.FC<TwerkingTriangleProps> = ({
  loopDuration = 500,
  triangleSize = 6,
  triangleCount = 24,
  maxDegreeAngle = 150,
  frameRate = 1000 / 60,
}) => {
  const group = useRef<Group>(null);
  let time = 0;
  let direction = -1;
  const triangleSizes = Array(triangleCount)
    .fill(0) // Cannot map on an empty array
    .map((_, i) => {
      return (triangleSize * (triangleCount - i)) / triangleCount;
    });

  useFrame(() => {
    if (!group.current) {
      return;
    }
    time +=
      (direction * ((2 * Math.PI) / maxDegreeAngle)) /
      (loopDuration / frameRate);
    if (time > Math.PI / maxDegreeAngle || time < -Math.PI / maxDegreeAngle) {
      direction = -direction;
    }

    group.current.children.forEach((triangle, key) => {
      triangle.rotateOnAxis(new Vector3(0, 0, 1), 0);
      triangle.rotation.z = key * time;
    });
  });

  return (
    <group ref={group}>
      {triangleSizes.map((size) => (
        <Triangle key={size} size={size} />
      ))}
    </group>
  );
};

export default TwerkingTriangle;
