export function calcDistFromIndex(i: number, numberPerSide: number): number {
  const x = i % numberPerSide;
  const y = Math.floor(i / numberPerSide);
  const center = Math.floor(numberPerSide / 2);
  return Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));
}
