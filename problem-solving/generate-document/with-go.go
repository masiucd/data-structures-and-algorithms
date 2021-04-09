package main

import "fmt"

func GenerateDocument(characters string, document string) bool {
	charCount := make(map[rune]int)

	for _, char := range characters {
		charCount[char] = charCount[char] + 1
	}

	for _, char := range document {
		if charCount[char] == 0 {
			return false
		}
		charCount[char] = charCount[char] - 1
	}

	return true
}

func main() {

	fmt.Println(GenerateDocument("abcabc", "aabbccc"))
}
