package main

import "strings"

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

func split(s string) []string {
	xs := make([]string, 0)
	startOfWord := 0

	for index, char := range s {
		if char == ' ' {
			xs = append(xs, s[startOfWord:index])
			startOfWord = index
		} else if s[startOfWord] == ' ' {
			xs = append(xs, " ")
			startOfWord = index
		}
	}

	xs = append(xs, s[startOfWord:])
	return xs
}

func ReverseWordsInString(str string) string {
	res := split(str)
	reverse(res)

	return strings.Join(res, "")
}
