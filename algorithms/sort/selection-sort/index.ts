export function selectionSort(array: number[]) {
  let currentIndex = 0;
  while (currentIndex < array.length - 1) {
    let minIndex = currentIndex;
    for (let i = currentIndex + 1; i < array.length; i++) {
      if (array[minIndex] > array[i]) minIndex = i;
    }
    swap(currentIndex, minIndex, array);
    currentIndex++;
  }
  return array;
}
// export function selectionSort(array: number[]) {
//   let currentIndex = 0;
//   while (currentIndex < array.length - 1) {
//     let minIndex = currentIndex;
//     for (let i = currentIndex + 1; i < array.length; i++) {
//       if (array[minIndex] > array[i]) minIndex = i;
//     }
//     swap(currentIndex, minIndex, array);
//     currentIndex++;
//   }
//   return array;
// }

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(selectionSort([4, 2, 9, -2, 33]));
