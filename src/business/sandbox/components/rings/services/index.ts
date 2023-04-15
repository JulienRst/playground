import { Euler } from 'three';

export function getRingsData(numberOfRings: number, width: number) {
  const ringsData = [];
  for (let i = 1; i <= numberOfRings; i++) {
    ringsData.push({
      size: 2.2 * i * width,
      rotation: new Euler(0, 0, 0),
    });
  }

  return ringsData;
}

export function getRotationFromTimeAndIndex(
  time: number, // seconds
  index: number,
  numberOfRings: number,
  loopDuration: number,
): Euler {
  const t = (time * 1000) % loopDuration;
  const durationForEach = 0.6 * loopDuration;
  const lastStart = loopDuration - durationForEach;
  const iStart = (lastStart / numberOfRings) * index;

  if (t <= iStart || t >= iStart + durationForEach) {
    return new Euler(0, 0, 0);
  }

  const completionOfLoop = (t - iStart) / durationForEach;
  const rotation = 2 * Math.PI * completionOfLoop;
  return new Euler(rotation, rotation, rotation);
}
