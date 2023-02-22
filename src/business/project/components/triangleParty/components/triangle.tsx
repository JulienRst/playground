import React, { useRef, useLayoutEffect } from 'react';
import { Vector3, BufferGeometry, DoubleSide } from 'three';

interface TriangleProps {
  points: Vector3[];
}

const Triangle: React.FC<TriangleProps> = ({ points }) => {
  const ref = useRef<BufferGeometry>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.setFromPoints(points);
      ref.current.computeVertexNormals();
    }
  }, [points, ref]);

  return (
    <mesh>
      <bufferGeometry ref={ref} />
      <meshNormalMaterial transparent opacity={0.5} side={DoubleSide} />
    </mesh>
  );
};

export default Triangle;
