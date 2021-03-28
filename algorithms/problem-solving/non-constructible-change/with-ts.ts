export function nonConstructibleChange(coins: number[]) {
  const xs = [...coins].sort((a, b) => a - b);
  let current = 0;

  for (const coin of xs) {
    if (coin > current + 1) {
      return current + 1;
    }
    current += coin;
  }

  return current + 1;
}

const coins = [1, 2, 5]; // 4

console.log(nonConstructibleChange(coins));
