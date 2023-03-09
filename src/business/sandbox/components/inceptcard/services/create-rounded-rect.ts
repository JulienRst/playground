import * as THREE from 'three';

export default function createRoundedRect(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const context = new THREE.Shape();
  context.moveTo(x, y + radius);
  context.lineTo(x, y + height - radius);
  context.quadraticCurveTo(x, y + height, x + radius, y + height);
  context.lineTo(x + width - radius, y + height);
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width,
    y + height - radius,
  );
  context.lineTo(x + width, y + radius);
  context.quadraticCurveTo(x + width, y, x + width - radius, y);
  context.lineTo(x + radius, y);
  context.quadraticCurveTo(x, y, x, y + radius);
  return context;
}
