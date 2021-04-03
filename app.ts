function reverseWordInString(s: string) {
  const stringList = mySplit(s);
  reverse(stringList);
  return stringList.join("");
}

function reverse(xs: string[]) {
  let start = 0,
    end = xs.length - 1;

  while (start < end) {
    const temp = xs[start];
    xs[start] = xs[end];
    xs[end] = temp;
    start++;
    end--;
  }
}

function mySplit(input: string) {
  const box: string[] = [];
  let firstLetter = 0;

  for (let index = 0; index < input.length; index++) {
    const character = input[index];
    if (character === " ") {
      box.push(input.slice(firstLetter, index));
      firstLetter = index;
    } else if (input[firstLetter] === " ") {
      box.push(" ");
      firstLetter = index;
    }
  }
  box.push(input.slice(firstLetter));
  return box;
}

const s = "hello world  !!!";
console.log(reverseWordInString(s));
