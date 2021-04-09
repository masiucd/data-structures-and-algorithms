export function caesarCipherEncryptor(str: string, key: number) {
  const charsXs = [];
  const amountOfLettersInAlphabet = 26;
  const newKey = key % amountOfLettersInAlphabet;
  for (const char of str) {
    charsXs.push(getNewLetter(char, newKey));
  }

  return charsXs.join("");
}

const getNewLetter = (char: string, key: number) => {
  // moving amount of places forward
  const newCharCode = char.charCodeAt(0) + key;

  // 122 = z End of the alphabet
  return newCharCode <= 122 ? backToChar(newCharCode) : backToChar(96 + (newCharCode % 122));
};

// console.log(caesarCipherEncryptor("xyz", 2)); // zab

// charCode x = 120
// charCode y = 121
// charCode s = 115
// charCode z = 122

const backToChar = (charCode: number) => {
  return String.fromCharCode(charCode);
};

export function caesarCipherEncryptor2(str: string, key: number) {
  const charsXs = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const newKey = key % alphabet.length;

  for (const char of str) {
    charsXs.push(getNewLetter2(char, newKey, alphabet));
  }

  return charsXs.join("");
}

const getNewLetter2 = (char: string, key: number, alphabet: string[]) => {
  const newCharCode = alphabet.indexOf(char) + key;
  // console.log(newCharCode, newCharCode % 26);
  // console.log(1 % 3);
  return alphabet[newCharCode % 26];
};

console.log(caesarCipherEncryptor2("xyz", 2)); // zab
