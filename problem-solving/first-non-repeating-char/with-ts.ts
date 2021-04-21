// Brute force Solution // O(n^2)
export function firstNonRepeatingCharacter(string: string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    let isDuplicate = false;

    for (let j = 0; j < string.length; j++) {
      const charToCompare = string[j];

      if (char === charToCompare && i !== j) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) return i;
  }
  return -1;
}

// O(n)
export function firstNonRepeatingCharacter2(string: string) {
  const map = new Map<string, number>();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char)! + 1);
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i]) && map.get(string[i]) === 1) {
      return i;
    }
  }
  return -1;
}

const str = "abcdcaf";
console.log(firstNonRepeatingCharacter2(str));
