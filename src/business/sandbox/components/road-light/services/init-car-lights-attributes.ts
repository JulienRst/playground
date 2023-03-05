import { Color } from 'three';

export default function initCarLightsAttributes(
  roadWidth: number,
  roadDepth: number,
  roadSections: number,
  carLightCount: number,
  color: Color,
) {
  // Manage Position
  const aOffset = [];
  // Manage Size
  const aMetrics = [];
  // Manage Color
  const aColor = [];

  const sectionWidth = roadWidth / (2 * roadSections);

  for (let i = 0; i < carLightCount; i++) {
    const radius = Math.random() * 0.1 + 0.1; // 0.1 = Minimum size of the light
    const length = Math.random() * roadDepth * 0.01 + roadDepth * 0.01;
    const section = i % roadSections;
    const sectionX = section * sectionWidth - sectionWidth;
    const carWidth = 0.5 * sectionWidth;
    const offsetX = 0.5 * Math.random();
    const offsetY = radius * 1.3;

    const offsetZ = Math.random() * roadDepth;

    aOffset.push(sectionX - carWidth / 2 - offsetX);
    aOffset.push(offsetY);
    aOffset.push(-offsetZ);

    aOffset.push(sectionX + carWidth / 2 + offsetX);
    aOffset.push(offsetY);
    aOffset.push(-offsetZ);

    aMetrics.push(radius);
    aMetrics.push(length);
    aMetrics.push(radius);
    aMetrics.push(length);

    aColor.push(color.r);
    aColor.push(color.g);
    aColor.push(color.b);

    aColor.push(color.r);
    aColor.push(color.g);
    aColor.push(color.b);
  }

  return {
    aOffset,
    aMetrics,
    aColor,
  };
}
