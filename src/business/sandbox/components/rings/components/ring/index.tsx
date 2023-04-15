import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Euler, Mesh } from 'three';

interface RingProps {
  size: number;
  width: number;
  rotation: Euler;
}

const Ring: React.FC<RingProps> = ({ size, width, rotation }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation.x;
      meshRef.current.rotation.y = rotation.y;
      meshRef.current.rotation.z = rotation.z;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[size, width, 32, 256]} />
      <meshStandardMaterial color={0xf0d8cc} roughness={1} metalness={1} />
    </mesh>
  );
};

export default Ring;
