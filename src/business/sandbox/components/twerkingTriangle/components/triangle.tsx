import { useLayoutEffect, useRef } from 'react';
import { BufferGeometry } from 'three';
import { getTrianglePointsFromSize } from '../services/getTrianglePointsFromSize';

interface TriangleProps {
  size?: number;
}

const Triangle: React.FC<TriangleProps> = ({ size = 1 }) => {
  const points = getTrianglePointsFromSize(size);
  const ref = useRef<BufferGeometry>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.setFromPoints(points);
    }
  }, [points, ref]);

  return (
    <line>
      <bufferGeometry ref={ref} />
    </line>
  );
};

export default Triangle;
