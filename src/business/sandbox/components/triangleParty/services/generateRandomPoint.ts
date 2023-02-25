import { Vector3 } from 'three';

export function generateRandomPoint(size: number): Vector3 {
  return new Vector3(
    Math.random() * 2 * size - size,
    Math.random() * 2 * size - size,
    Math.random() * 2 * size - size,
  );
}
