export function bytesToMB(bytes: number, digits = 2) {
  const mb = bytes / 1_000_000; // 10^6
  return Number(mb.toFixed(digits));
}
