package main

import (
	"fmt"
	"strconv"
)

func RunLengthEncoding(str string) string {
	chars := []byte{}
	step := 1

	for i := 1; i < len(str); i++ {
		current := str[i]
		prev := str[i-1]

		if current != prev || step == 9 {
			chars = append(chars, strconv.Itoa(step)[0])
			chars = append(chars, prev)
			fmt.Println(strconv.Itoa(step)[0])
			step = 0
		}
		step++
	}

	chars = append(chars, strconv.Itoa(step)[0])
	chars = append(chars, str[len(str)-1])

	return string(chars)
}

func main() {
	res := RunLengthEncoding("AAAAAAAAAAAAABBCCCCDD")
	fmt.Println(res)
}
