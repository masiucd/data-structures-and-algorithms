package main

import "fmt"

// Palindrome func
func Palindrome(str string) bool {
	reversed := ""

	for _, v := range str {
		reversed = string(v) + reversed
	}

	return str == string(reversed)
}

// Palindrome2 func
func Palindrome2(str string) bool {
	l, r := 0, len(str)-1

	for l < r {
		if str[l] == str[r] {
			l++
			r--
		} else {
			return false
		}
	}
	return true
}

func main() {
	r := Palindrome2("apa")
	fmt.Println(r)
}
