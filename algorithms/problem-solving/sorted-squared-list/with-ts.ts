export function sortedSquaredArray(array: number[]) {
  return array.map(x => x ** 2);
}
export function sortedSquaredArray2(array: number[]) {
  const xs = [];
  for (const x of array) {
    xs.push(x ** 2);
  }
  return xs;
}

const xs = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray2(xs));
