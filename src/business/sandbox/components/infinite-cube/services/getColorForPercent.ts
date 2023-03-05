import { Color } from 'three';

const violet = { r: 255, g: 0, b: 255 };
const blue = { r: 0, g: 0, b: 255 };

export function getColorForPercent(percentOfDistant: number): Color {
  // Percent of distant is between 0 and 1
  const color = {
    r: Math.round(violet.r + percentOfDistant * (blue.r - violet.r)),
    g: Math.round(violet.g + percentOfDistant * (blue.g - violet.g)),
    b: Math.round(violet.b + percentOfDistant * (blue.b - violet.b)),
  };
  const colorString = {
    r: ('0' + color.r.toString(16)).slice(-2),
    g: ('0' + color.g.toString(16)).slice(-2),
    b: ('0' + color.b.toString(16)).slice(-2),
  };
  return new Color(`#${colorString.r}${colorString.g}${colorString.b}`);
}
