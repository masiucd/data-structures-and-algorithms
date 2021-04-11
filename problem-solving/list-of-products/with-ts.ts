// with dividing
export function arrayOfProducts(array: number[]) {
  let zeroCount = 0;

  const totalProduct = array.reduce((acc, v) => {
    if (v) {
      return acc * v;
    }
    zeroCount++;
    return acc;
  }, 1);

  const result: number[] = [];
  for (const [index, n] of array.entries()) {
    if (n) {
      if (zeroCount === 0) {
        result[index] = totalProduct / n;
      } else {
        result[index] = 0;
      }
    } else if (zeroCount === 1) {
      result[index] = totalProduct;
    } else {
      result[index] = 0;
    }
  }
  return result;
}

// naive approach
export function arrayOfProducts2(array: number[]) {
  const products: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let current = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        current *= array[j];
        products[i] = current;
      }
    }
  }
  return products;
}

export function arrayOfProducts3(array: number[]) {
  const products = new Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  return products;
}

// const list = [5, 1, 4, 2]; // [8,40,10,20]
// const list = [0, 0, 0, 0]; // [0,0,0,0]
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arrayOfProducts(list));
