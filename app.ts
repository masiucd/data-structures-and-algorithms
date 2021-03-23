const generateDocument = (characters: string, document: string) => {
  for (const char of document) {
    const documentFrequency = countHandler(char, document);
    const charFrequency = countHandler(char, characters);
    if (documentFrequency > charFrequency) return false;
  }
  return true;
};

const countHandler = (char: string, target: string) => {
  let count = 0;
  for (const x of target) {
    if (char === x) {
      count++;
    }
  }
  return count;
};

console.log(generateDocument("abcabc", "aabbccc"));
