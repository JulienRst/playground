import React from 'react';
import { Mesh, BufferGeometry, Material } from 'three';
import { useFrame } from '@react-three/fiber';

const RotatingCube: React.FC = () => {
  const m = React.useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame(() => {
    if (m.current) {
      m.current.rotation.x += 0.01;
      m.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={m}>
      <boxGeometry args={[1]} />
      <meshStandardMaterial args={[{ wireframe: false }]} />
    </mesh>
  );
};

export default RotatingCube;
