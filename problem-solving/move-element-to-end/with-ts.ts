// Not an pure function
const arrayMoveMutate = <T>(xs: T[], from: number, to: number) => {
  const startIndex = from < 0 ? xs.length + from : from;

  if (startIndex >= 0 && startIndex < xs.length) {
    const endIndex = to < 0 ? xs.length + to : to;
    const [x] = xs.splice(from, 1);
    xs.splice(endIndex, 0, x);
  }
};
// pure version
const arrayMove = <T>(xs: T[], from: number, to: number) => {
  const list = [...xs];
  arrayMoveMutate(xs, from, to);
  return list;
};

export function moveElementToEnd(array: number[], toMove: number) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    while (start < end && array[end] === toMove) end--;
    if (array[start] === toMove) swap(start, end, array);
    start++;
  }

  return array;
}

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}

// const xs = [2, 1, 2, 2, 2, 3, 4, 2];
// console.log(moveElementToEnd(xs, 2));
