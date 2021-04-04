export function smallestDifference(arrayOne: number[], arrayTwo: number[]): number[] {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let pointerForListA = 0;
  let pointerForListB = 0;
  let current = Infinity;
  let smallest = Infinity;
  let smallestPair: number[] = [];

  while (pointerForListA < arrayOne.length && pointerForListB < arrayTwo.length) {
    const numForA = arrayOne[pointerForListA];
    const numForB = arrayTwo[pointerForListB];
    if (numForA < numForB) {
      current = numForB - numForA;
      pointerForListA++;
    } else if (numForB < numForA) {
      current = numForA - numForB;
      pointerForListB++;
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

const list1 = [-1, 5, 10, 20, 28, 3]; // [-1, 3, 5, 10, 20, 28,];
const list2 = [26, 134, 135, 15, 17]; // [15,17,26,134,135]

console.log(smallestDifference(list1, list2));
