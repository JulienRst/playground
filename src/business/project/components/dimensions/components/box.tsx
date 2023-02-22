import React from 'react';
import { BoxGeometry, Vector3 } from 'three';

interface BoxProps {
  position: Vector3;
  size: Vector3;
}
const Box: React.FC<BoxProps> = ({ position, size }) => {
  return (
    <lineSegments position={position}>
      <edgesGeometry args={[new BoxGeometry(size.x, size.y, size.z)]} />
      <lineBasicMaterial color="#ffffff" />
    </lineSegments>
  );
};

export default Box;
