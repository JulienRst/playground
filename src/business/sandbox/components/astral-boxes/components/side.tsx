import React, { PropsWithChildren, useRef } from 'react';
import { Edges, MeshPortalMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SideProps extends PropsWithChildren {
  color: THREE.Color;
  index: number;
}

const Side: React.FC<SideProps> = ({ children, color, index }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });
  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      <ambientLight intensity={0.5} />
      {/* Replace with a box geometry without the last face ? */}
      <spotLight
        // castShadow
        color={color}
        intensity={2}
        position={[10, 10, 10]}
      />
      <mesh ref={mesh}>
        {children}
        <meshLambertMaterial color={color} />
        <Edges />
      </mesh>
    </MeshPortalMaterial>
  );
};

export default Side;
