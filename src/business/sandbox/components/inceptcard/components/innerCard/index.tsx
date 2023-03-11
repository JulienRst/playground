import { PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

const InnerCard: React.FC = () => {
  const { camera } = useThree();
  const box = useRef<Mesh>(null);
  useLayoutEffect(() => {
    camera.lookAt(0, 0, 0);
  });

  useFrame(() => {
    if (box.current) {
      box.current.rotation.x += 0.01;
      box.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        manual
        fov={20}
        aspect={1}
        near={0.1}
        far={500}
        position={new THREE.Vector3(0, 0, 20)}
      />
      <group>
        <ambientLight color={0xffffff} intensity={0.1} />
        <pointLight
          color={0xffffff}
          intensity={0.8}
          position={new THREE.Vector3(5, 5, 5)}
        />
        <mesh ref={box}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color={0xff00ff} />
        </mesh>
      </group>
    </>
  );
};

export default InnerCard;
