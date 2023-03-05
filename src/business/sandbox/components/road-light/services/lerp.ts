export default function lerp(
  current: number,
  target: number,
  speed = 0.1,
  limit = 0.001,
) {
  let change = (target - current) * speed;
  if (Math.abs(change) < limit) {
    change = target - current;
  }

  return change;
}
