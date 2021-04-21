export const tandemBicycle = (
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) => {
  let startIndex = 0;
  let endIndex = redShirtSpeeds.length - 1;

  const reds = [...redShirtSpeeds].sort((a, b) => a - b);
  const blues = fastest
    ? [...blueShirtSpeeds].sort((a, b) => a - b)
    : [...blueShirtSpeeds].sort((a, b) => b - a);

  let total = 0;

  while (startIndex < blues.length) {
    const num = Math.max(reds[endIndex], blues[startIndex]);
    total += num;
    startIndex++;
    endIndex--;
  }
  return total;
};

const blueShirtSpeeds = [5, 5, 3, 9, 2];
const redShirtSpeeds = [3, 6, 7, 2, 1];
const res = tandemBicycle(blueShirtSpeeds, redShirtSpeeds, true); // 32
console.log(res);
