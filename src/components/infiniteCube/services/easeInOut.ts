export function easeInOut(
  currentTime: number,
  startValue: number,
  endValue: number,
  totalDuration: number,
): number {
  currentTime /= totalDuration / 2;
  if (currentTime < 1) {
    return (endValue / 2) * Math.pow(currentTime, 3) + startValue;
  } else {
    currentTime -= 2;
    return (endValue / 2) * (Math.pow(currentTime, 3) + 2) + startValue;
  }
}
