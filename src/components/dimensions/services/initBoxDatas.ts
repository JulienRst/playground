import { Vector3 } from 'three';

export function initBoxDatas(numberOfStrokes: number) {
  return Array(numberOfStrokes)
    .fill(0)
    .map((_, i) => ({
      position: new Vector3(0, 0, numberOfStrokes / 2 - 2 * i),
      size: new Vector3(1, 1, 1),
    }));
}
