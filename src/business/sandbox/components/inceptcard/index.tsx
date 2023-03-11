import { useFrame, useLoader } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import createRoundedRect from './services/create-rounded-rect';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { PerspectiveCamera, RenderTexture } from '@react-three/drei';
import InnerCard from './components/innerCard';

const baseShape = createRoundedRect(-2, -3, 4, 6, 0.25);
const encartShape = createRoundedRect(1.25, -1, 0.75, 0.75, 0.25);

const Inceptcard: React.FC = () => {
  const font = useLoader(FontLoader, '/fonts/Lato_Bold.json');
  const pointLightRef = useRef<THREE.PointLight>(null);
  const cardRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    pointLightRef.current?.lookAt(new THREE.Vector3(0, 0, 0));
  });

  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.02;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault fov={60} position={[0, 0, 10]} />
      <ambientLight color={0xffffff} intensity={1} />
      <pointLight
        ref={pointLightRef}
        color={0xffffff}
        intensity={7}
        position={[-10, 3, 10]}
      />
      <group ref={cardRef} rotation={[0, 0, 0.2]}>
        <mesh>
          <shapeGeometry args={[baseShape]} />
          <meshBasicMaterial color={0xbdc3c7} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 1, 0.001]}>
          <planeGeometry args={[3.5, 3.5]} />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <InnerCard />
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
        <mesh position={[0, 0, 0.002]}>
          <shapeGeometry args={[encartShape]} />
          <meshBasicMaterial color={0xbdc3c7} />
        </mesh>
        <mesh position={[1.32, -0.72, 0.002]}>
          <textGeometry args={['12', { font, size: 0.3, height: 0.001 }]} />
          <meshStandardMaterial
            color={0x101010}
            roughness={0.8}
            metalness={0.7}
          />
        </mesh>
        <mesh position={[-0.8, -1.4, 0.002]}>
          <textGeometry
            args={['Magic Ball', { font, size: 0.3, height: 0.001 }]}
          />
          <meshStandardMaterial
            color={0x101010}
            roughness={0.8}
            metalness={0.7}
          />
        </mesh>
      </group>
    </>
  );
};

export default Inceptcard;
