import { Vector3 } from 'three';
import { calcDistFromIndex } from './calcDistFromIndex';
import { CubeProps } from '../components/cube';
import { getColorForPercent } from './getColorForPercent';

export function initCubeData(
  numberPerSide: number,
  cubeSize: number,
): CubeProps[] {
  const cubeDatas: Array<CubeProps> = [];
  for (let i = 1; i <= numberPerSide; i++) {
    for (let j = 1; j <= numberPerSide; j++) {
      const index = (i - 1) * numberPerSide + (j - 1);
      const percentOfDistant =
        calcDistFromIndex(index, numberPerSide) /
        calcDistFromIndex(numberPerSide * numberPerSide, numberPerSide);
      const color = getColorForPercent(percentOfDistant);
      const x = (i - 0.5 - numberPerSide / 2) * cubeSize * 1;
      const z = (j - 0.5 - numberPerSide / 2) * cubeSize * 1;
      const position = new Vector3(x, 0, z);

      cubeDatas.push({
        color,
        position,
        size: cubeSize,
      });
    }
  }

  return cubeDatas;
}
