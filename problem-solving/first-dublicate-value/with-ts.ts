// Brute force solution! O(n^2)
export function firstDuplicateValueX(list: number[]) {
  let minCurrentIndex = list.length;

  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    for (let j = i + 1; j < list.length; j++) {
      const valueToCompareWith = list[j];
      if (value === valueToCompareWith) {
        minCurrentIndex = Math.min(minCurrentIndex, j);
      }
    }
  }

  return minCurrentIndex === list.length ? -1 : list[minCurrentIndex];
}

export const firstDuplicateValue = (list: number[]) => {
  const nonSeenNumbers = new Map<number, boolean>();

  for (const num of list) {
    if (nonSeenNumbers.has(num)) {
      return num;
    }
    nonSeenNumbers.set(num, true);
  }
  return -1;
};

let list = [1, 2, 3, 2];
list = [2, 1, 5, 2, 3, 3, 4];
list = [2, 1, 5, 3, 2, 2, 4];
console.log(firstDuplicateValue(list));
