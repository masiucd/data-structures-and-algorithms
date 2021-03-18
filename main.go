package main

import "fmt"

func GenerateDocument(characters string, document string) bool {
	mapCount := make(map[string]int)

	for _, c := range characters {
		_, ok := mapCount[string(c)]
		if ok == true {
			mapCount[string(c)]++
		} else {
			mapCount[string(c)] = 1
		}
	}

	for _, c := range document {
		_, ok := mapCount[string(c)]
		if !ok {
			return false
		}
		mapCount[string(c)]--

	}

	return true
}

func main() {

	fmt.Println(GenerateDocument("abcabc", "aabbccc"))
}
