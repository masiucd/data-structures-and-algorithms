package main

import "fmt"

// FirstNonRepeatingCharacter func // O(n^2)
func FirstNonRepeatingCharacter(str string) int {
	for i := 0; i < len(str); i++ {
		isFound := false
		for j := 0; j < len(str); j++ {
			if str[i] == str[j] && i != j {
				isFound = true
			}
		}
		if !isFound {
			return i
		}
	}
	return -1
}

// FirstNonRepeatingCharacter2 func // O(n)
func FirstNonRepeatingCharacter2(str string) int {
	store := make(map[rune]int)

	for _, char := range str {
		store[char]++
	}

	for i, char := range str {
		if store[char] == 1 {
			return i
		}
	}

	return -1
}

func main() {
	s := "abcdcaf"
	x := FirstNonRepeatingCharacter2(s)
	fmt.Println(x)
}
