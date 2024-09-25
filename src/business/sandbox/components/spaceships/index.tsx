import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Euler, Group, Mesh, Vector3, Clock } from 'three';

function getCurrentRotation(t: number) {
  return 0.33 + Math.sin(t * 2) / 4;
}

const Spaceships: React.FC = () => {
  const ship = useRef<Mesh>(null);
  const flameBase = useRef<Mesh>(null);
  const flameMiddle = useRef<Mesh>(null);
  const flameTip = useRef<Mesh>(null);
  const group = useRef<Group>(null);
  const clock = new Clock();
  useFrame(() => {
    const t = clock.getElapsedTime();
    if (ship.current) {
      ship.current.rotation.y += 0.005;
      if (group.current) {
        group.current.rotation.y = getCurrentRotation(t);
      }
      if (flameBase.current) {
        flameBase.current.position.x = Math.sin(t * 2) / 6;
      }
      if (flameMiddle.current) {
        flameMiddle.current.position.x = Math.sin((t - 0.05) * 2) / 6;
      }
      if (flameTip.current) {
        flameTip.current.position.x = Math.sin((t - 0.1) * 2) / 6;
      }
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={new Vector3(0, 0, 15)} />
      <ambientLight color={0xffffff} />
      <group ref={group} rotation={new Euler(0, 0.33, -Math.PI / 2 + 0.33)}>
        {/* The ship */}
        <mesh ref={ship}>
          <meshBasicMaterial wireframe />
          <coneGeometry args={[0.5, 1, 4, 1, true]} />
        </mesh>
        <mesh ref={flameBase} position={new Vector3(0, -0.7, 0)}>
          <meshBasicMaterial />
          <cylinderGeometry args={[0.2, 0.15, 0.1]} />
        </mesh>
        <mesh ref={flameMiddle} position={new Vector3(0, -0.85, 0)}>
          <meshBasicMaterial />
          <cylinderGeometry args={[0.1, 0.05, 0.1]} />
        </mesh>
        <mesh
          ref={flameTip}
          position={new Vector3(0, -1, 0)}
          rotation={new Euler(Math.PI, 0, 0)}
        >
          <meshBasicMaterial />
          <coneGeometry args={[0.04, 0.1]} />
        </mesh>
      </group>
    </>
  );
};

export default Spaceships;
