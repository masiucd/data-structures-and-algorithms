package main

import "strings"

func isIsogram(str string) bool {

	charMap := map[rune]int{}
	x := strings.Replace(strings.ToLower(str), "-", "", -1)
	xx := strings.Replace(strings.ToLower(x), " ", "", -1)

	for _, v := range xx {
		charMap[v]++
	}
	for _, v := range charMap {
		if v > 1 {
			return false
		}
	}
	return true
}
