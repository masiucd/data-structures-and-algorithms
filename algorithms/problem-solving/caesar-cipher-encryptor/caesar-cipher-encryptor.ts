export function caesarCipherEncryptor(str: string, key: number) {
  const charsXs = [];
  const newKey = key % 26;
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

const backToChar = (charCode: number) => {
  return String.fromCharCode(charCode);
};
