import React from 'react';
import { Uniform, Color, DoubleSide } from 'three';
import { distortion } from '../../services/distortion';
import { fragmentShader, vertexShader } from '../../services/shaders/road';

interface RoadProps {
  width?: number;
  depth?: number;
  widthDetails?: number;
  depthDetails?: number;
}

const Road: React.FC<RoadProps> = ({
  width = 20,
  depth = 400,
  widthDetails = 20,
  depthDetails = 200,
}) => {
  return (
    <mesh position={[0, 0, -depth / 2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[width, depth, widthDetails, depthDetails]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={Object.assign(
          {
            uColor: new Uniform(new Color(0x666666)),
            uTravelLength: new Uniform(depth),
          },
          distortion.uniforms,
        )}
        onBeforeCompile={(shader) => {
          shader.vertexShader = shader.vertexShader.replace(
            '#include',
            distortion.getDistortion,
          );
        }}
        side={DoubleSide}
      />
    </mesh>
  );
};

export default Road;
