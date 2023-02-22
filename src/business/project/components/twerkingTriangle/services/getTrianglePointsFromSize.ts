import { Vector3 } from 'three';

export function getTrianglePointsFromSize(size: number): Array<Vector3> {
  const d = Math.tan(Math.PI / 6) * size;
  const points = [
    new Vector3(0, size / 2, 0),
    new Vector3(d, -size / 2, 0),
    new Vector3(-d, -size / 2, 0),
    new Vector3(0, size / 2, 0),
  ];

  return points;
}
