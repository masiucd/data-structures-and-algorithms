const reverse = (xs: string[]): void => {
  let start = 0;
  let end = xs.length - 1;

  while (start < end) {
    const temp = xs[start];
    xs[start] = xs[end];
    xs[end] = temp;
    start++;
    end--;
  }
};
const mySplit = (input: string): string[] => {
  const words = [];
  let startOfWord = 0;

  for (let i = 0; i < input.length; i++) {
    const word = input[i];
    if (word === " ") {
      words.push(input.slice(startOfWord, i));
      startOfWord = i;
    } else if (input[startOfWord] === " ") {
      words.push(input[startOfWord]);
      startOfWord = i;
    }
  }

  // console.log("words", words);
  return words;
};

export function reverseWordsInString(string: string) {
  const result = mySplit(string);
  reverse(result);
  return result.join("");
}

console.log(reverseWordsInString("hello my name is Marcell"));
// console.log(reverseWordsInString("hello      44"));
