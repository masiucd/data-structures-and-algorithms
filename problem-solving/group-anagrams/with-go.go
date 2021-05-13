package main

import (
	"fmt"
	"sort"
)

// GroupAnagrams func
func GroupAnagrams(words []string) [][]string {
	anagrams := map[string][]string{}

	for _, word := range words {
		sortedWord := sortWord(word)
		anagrams[sortedWord] = append(anagrams[sortedWord], word)
	}

	result := [][]string{}

	for _, group := range anagrams {
		result = append(result, group)
	}

	return result

}

func sortWord(word string) string {
	wordBytes := []byte(word) // similar to split an string in JS
	sort.SliceStable(wordBytes, func(i, j int) bool {
		return wordBytes[i] < wordBytes[j]
	})

	// convert back to string
	return string(wordBytes)
}

func main() {
	fmt.Println(GroupAnagrams([]string{"yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"}))
}
