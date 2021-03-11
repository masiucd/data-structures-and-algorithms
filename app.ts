const swap = (i: number, j: number, xs: number[]) => {
  [xs[i], xs[j]] = [xs[j], xs[i]];
};
const fn = (arr: number[]) => {
  const xs = [...arr];
  for (let i = 1; i < xs.length; i++) {
    let j = i;
    while (j > 0 && xs[j] < xs[j - 1]) {
      swap(j, j - 1, xs);
      j--;
      // decrease j
    }
  }
  return xs;
};

const xs = [3, 2, 1, 2, 6];
let r = fn(xs);
console.log(r);
console.log(xs);
