import { useFrame, useThree } from '@react-three/fiber';
import React, { useLayoutEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { DoubleSide } from 'three';
import { distortion } from '../../services/distortion';
import initCarLightsAttributes from '../../services/init-car-lights-attributes';
import {
  fragmentShader,
  vertexShader,
} from '../../services/shaders/car-lights';

const curve = new THREE.LineCurve3(
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, -1),
);
const base = new THREE.TubeGeometry(curve, 25, 1, 16, false);

interface CarLightsProps {
  roadWidth: number;
  roadDepth: number;
  roadSections: number;
  count: number;
  color: THREE.Color;
  speed: number;
  position: THREE.Vector3;
}
const CarLights: React.FC<CarLightsProps> = ({
  roadWidth,
  roadDepth,
  roadSections,
  count,
  color,
  speed,
  position,
}) => {
  const instanceRef = useRef<THREE.InstancedBufferGeometry>(null);
  const shaderRef = useRef<THREE.ShaderMaterial>(null);
  const { aOffset, aMetrics, aColor } = initCarLightsAttributes(
    roadWidth,
    roadDepth,
    roadSections,
    count,
    color,
  );

  const { clock } = useThree();
  useFrame(() => {
    if (!shaderRef.current) {
      return;
    }
    shaderRef.current.uniforms.uTime.value = clock.elapsedTime;
    shaderRef.current.uniforms.uSpeed.value = speed;
  });

  useLayoutEffect(() => {
    if (!instanceRef.current) {
      return;
    }

    instanceRef.current.copy(base);
    instanceRef.current.setAttribute(
      'aColor',
      new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false),
    );
    instanceRef.current.setAttribute(
      'aOffset',
      new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false),
    );
    instanceRef.current.setAttribute(
      'aMetrics',
      new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false),
    );
    instanceRef.current.instanceCount = count * 2;
  }, [instanceRef]);

  const uniforms = useMemo(
    () => ({
      uTime: new THREE.Uniform(0),
      uSpeed: new THREE.Uniform(speed),
      uTravelLength: new THREE.Uniform(roadDepth),
      uFade: new THREE.Uniform(new THREE.Vector2(0, 0)),
      fogNear: new THREE.Uniform(roadDepth * 0.1),
      fogFar: new THREE.Uniform(roadDepth * 2),
      fogColor: new THREE.Uniform(new THREE.Color(0x000000)),
      ...distortion.uniforms,
    }),
    [],
  );

  return (
    <mesh position={position}>
      <instancedBufferGeometry ref={instanceRef} />
      <shaderMaterial
        ref={shaderRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        onBeforeCompile={(shader) =>
          (shader.vertexShader = shader.vertexShader.replace(
            '#include',
            distortion.getDistortion,
          ))
        }
        side={DoubleSide}
      />
    </mesh>
  );
};

export default CarLights;
