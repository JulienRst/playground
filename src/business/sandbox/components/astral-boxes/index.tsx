import { CameraControls, Edges } from '@react-three/drei';
import Side from './components/side';
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
const AstralBoxes: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x -= 0.01;
      mesh.current.rotation.y -= 0.01;
      mesh.current.rotation.z += 0.01;
    }
  });

  return (
    <>
      <mesh
        receiveShadow
        castShadow
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
        ref={mesh}
      >
        <boxGeometry args={[2, 2, 2]} />
        <Edges color="white" />
        <Side index={0} color={new THREE.Color('orange')}>
          <torusGeometry args={[0.65, 0.2, 64]} />
        </Side>
        <Side index={1} color={new THREE.Color('lightblue')}>
          <boxGeometry args={[1, 1, 1]} />
        </Side>
        <Side index={2} color={new THREE.Color('indianred')}>
          <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
        </Side>
        <Side index={3} color={new THREE.Color('lightcoral')}>
          <tetrahedronGeometry args={[1, 1]} />
        </Side>
        <Side index={4} color={new THREE.Color('plum')}>
          <coneGeometry args={[1, 0.8, 4]} />
        </Side>
        <Side index={5} color={new THREE.Color('teal')}>
          <icosahedronGeometry />
        </Side>
        <Side index={6} color={new THREE.Color('darkorchid')}>
          <octahedronGeometry />
        </Side>
      </mesh>
      <CameraControls makeDefault />
    </>
  );
};

export default AstralBoxes;
