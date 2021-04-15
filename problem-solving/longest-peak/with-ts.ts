export function longestPeak(array: number[]) {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }
    let leftIndex = i - 2;
    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex--;
    }
    let rightIndex = i + 2;
    while (rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {
      rightIndex++;
    }

    const currentPeak = rightIndex - leftIndex - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeak);
    i = rightIndex;
  }

  return longestPeakLength;
}

const list = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]; // 6
// from 0 -> 10 -> 6 -> 5 -> -1 -> -3

console.log(longestPeak(list));
