package main

import (
	"fmt"
	"strings"
)

func split(input string) []string {
	words := make([]string, 0)
	startOfWord := 0
	for i, char := range input {
		if char == ' ' {
			words = append(words, input[startOfWord:i])
			startOfWord = i
		} else if input[startOfWord] == ' ' {
			words = append(words, " ")
			startOfWord = i
		}
	}

	words = append(words, input[startOfWord:])

	return words
}

func reverse(xs []string) {
	start, end := 0, len(xs)-1

	for start < end {
		temp := xs[start]
		xs[start] = xs[end]
		xs[end] = temp
		start++
		end--
	}
}

// ReverseWordsInString func
func ReverseWordsInString(str string) string {
	res := split(str)
	reverse(res)
	return strings.Join(res, "")
}

func main() {
	res := ReverseWordsInString("hello marcello")
	fmt.Println(res)
}
