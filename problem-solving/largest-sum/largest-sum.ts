export function findThreeLargestNumbers(array: number[]) {
  if (array.length === 3) return array;
  const xs = [...array].sort((a, b) => a - b);

  return xs.slice(xs.length - 3);
}

export function findThreeLargestNumbers2(array: number[]) {
  const highestNumberOfThree: Array<number | null> = [null, null, null];

  for (const n of array) {
    updateList(highestNumberOfThree, n);
  }

  return highestNumberOfThree;
}

function updateList(arr: Array<number | null>, n: number) {
  if (arr[2] === null || n > arr[2]) {
    change(arr, n, 2);
  } else if (arr[1] === null || n > arr[1]) {
    change(arr, n, 1);
  } else if (arr[0] === null || n > arr[0]) {
    change(arr, n, 0);
  }
}

function change(list: Array<number | null>, n: number, index: number) {
  for (let i = 0; i <= index; i++) {
    if (index === i) {
      list[i] = n;
    } else {
      list[i] = list[i + 1];
    }
  }
}

const xs = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
console.log(findThreeLargestNumbers2(xs)); //[18,141,541]
