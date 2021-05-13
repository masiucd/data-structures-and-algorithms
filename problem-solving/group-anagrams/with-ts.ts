export function groupAnagrams(words: string[]) {
  const anagrams: Record<string, string[]> = {}
  for (const word of words) {
    const sortedWord = word
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("")
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word)
    } else {
      anagrams[sortedWord] = [word]
    }
  }
  return Object.values(anagrams)
}

// with A Javascript Map
function groupAnagrams2(words: string[]) {
  const store = new Map<string, string[]>()

  for (const word of words) {
    const sortedWord = word
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("")

    if (!store.has(sortedWord)) {
      store.set(sortedWord, [word])
    } else {
      const list = store.get(sortedWord)?.concat(word) as string[]
      store.set(sortedWord, list)
    }
  }
  const finalResult: string[][] = []

  for (const [_, value] of store) {
    finalResult.push(value)
  }

  return finalResult
}

// const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// console.log(groupAnagrams(words))

function isAnagram(word1: string, word2: string): boolean {
  const map: Record<string, number> = {}
  for (const char of word1) {
    if (map[char]) {
      map[char] += 1
    } else {
      map[char] = 1
    }
  }

  for (const char of word2) {
    // can't find letter or letter is zero then it's not an anagram
    // boolean check here
    if (!map[char]) {
      return false
    } else {
      map[char] -= 1
    }
  }
  return true
}
