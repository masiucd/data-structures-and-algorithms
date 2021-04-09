export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let pointerA = 0;
  let pointerB = 0;
  let current = Infinity;
  let smallest = Infinity;
  let smallestPair: Array<number> = [];

  while (pointerA < arrayOne.length && pointerB < arrayTwo.length) {
    const numForA = arrayOne[pointerA];
    const numForB = arrayTwo[pointerB];
    if (numForA < numForB) {
      current = Math.abs(numForB - numForA);
      pointerA++;
    } else if (numForB < numForA) {
      current = Math.abs(numForA - numForB);
      pointerB++;
    } else {
      return [numForA, numForB];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [numForA, numForB];
    }
  }
  return smallestPair;
}

// const list1 = [-1, 5, 10, 20, 28, 3]; // [-1, 3, 5, 10, 20, 28,];
// const list2 = [26, 134, 135, 15, 17]; // [15,17,26,134,135]

// console.log(smallestDifference(list1, list2));
