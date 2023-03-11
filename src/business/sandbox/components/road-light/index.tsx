import { PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLastMouseEventContext } from 'technical/three-fiber/context/mouse-events';
import { Color, Vector3 } from 'three';
import CarLights from './components/car-lights';
import Road from './components/road';
import lerp from './services/lerp';

interface RoadLightProps {
  roadDepth?: number;
  roadWidth?: number;
  roadSections?: number;
  numberOfLights?: number;
  speed?: number;
}

const RoadLight: React.FC<RoadLightProps> = ({
  roadDepth = 200,
  roadWidth = 30,
  roadSections = 3,
  numberOfLights = 20,
  speed = 30,
}) => {
  const [fovTarget, setFovTarget] = useState(90);
  const [fov, setFov] = useState(90);
  const [speedTarget, setSpeedTarget] = useState(speed);
  const [realSpeed, setRealSpeed] = useState(speed);
  const { camera } = useThree();
  const lastMouseEvent = useLastMouseEventContext();

  // Manage events
  useEffect(() => {
    if (!lastMouseEvent) {
      return;
    }
    switch (lastMouseEvent.type) {
      case 'mousedown':
        setFovTarget(140);
        setSpeedTarget(3 * speed);
        break;
      case 'mouseup':
        setFovTarget(90);
        setSpeedTarget(speed);
        break;
      default:
        return;
    }
  }, [lastMouseEvent]);

  useLayoutEffect(() => {
    camera.lookAt(0, 0, 0);
  });

  // Manage FOV Change
  useFrame(() => {
    const fovChange = lerp(fov, fovTarget, 0.1);
    if (fovChange !== 0) {
      setFov(fov + fovChange);
      camera.updateProjectionMatrix();
    }
    const speedChange = lerp(realSpeed, speedTarget, 0.001, 0.2);
    if (speedChange !== 0) {
      setRealSpeed(realSpeed + speedChange);
    }
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        near={0.1}
        far={10000}
        fov={fov}
        position={[90, 3, -180]}
      />
      <CarLights
        roadDepth={roadDepth}
        roadWidth={roadWidth}
        roadSections={roadSections}
        count={numberOfLights}
        speed={realSpeed}
        color={new Color(0xffffff)}
        position={new Vector3(roadWidth / 4, 0, 0)}
      />
      <CarLights
        roadDepth={roadDepth}
        roadWidth={roadWidth}
        roadSections={roadSections}
        count={numberOfLights}
        speed={-realSpeed}
        color={new Color(0xff1021)}
        position={new Vector3(-roadWidth / 4, 0, 0)}
      />
      <Road width={roadWidth} depth={roadDepth} />
    </>
  );
};

export default RoadLight;
