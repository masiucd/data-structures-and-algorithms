export function generateDocument(characters: string, document: string) {
  const charsMap: Record<string, number> = {};

  for (const char of characters) {
    charsMap[char] ? (charsMap[char] += 1) : (charsMap[char] = 1);
  }

  for (const l of document) {
    if (!charsMap[l]) {
      return false;
    } else {
      charsMap[l] -= 1;
    }
  }

  return true;
}

const generateDocument2 = (characters: string, document: string) => {
  const map: Record<string, number> = characters
    .split("")
    .reduce((obj: Record<string, number>, letter) => {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
      return obj;
    }, {});

  for (const char of document) {
    if (!map[char]) {
      return false;
    } else {
      map[char] -= 1;
    }
  }
  return true;
};

// console.log(generateDocument2("abcabc", "aabbccc"));
