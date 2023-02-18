import { Vector3 } from '@react-three/fiber';
import React from 'react';
import { Color } from 'three';

export interface CubeProps {
  color: Color;
  position: Vector3;
  size: number;
}

const Cube: React.FC<CubeProps> = ({ color, position, size }) => {
  return (
    <mesh position={position}>
      <meshBasicMaterial color={color} />
      <boxGeometry args={[size, size, size]} />
    </mesh>
  );
};

export default Cube;
