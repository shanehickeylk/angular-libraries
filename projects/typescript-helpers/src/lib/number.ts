export function truncateFloat(floatNumber, precision) {
  const multiplier = Math.pow(10, precision);
  return Math.trunc(floatNumber * multiplier) / multiplier;
}
