package main

import (
	"fmt"
	"sort"
)

// MinimumWaitingTime Func
func MinimumWaitingTime(queries []int) int {
	xs := queries
	sort.Ints(xs)

	res := 0
	for i, v := range xs {
		queryTime := len(xs) - (i + 1)

		res += v * queryTime
	}
	return res
}

func main() {
	xs := []int{3, 2, 1, 2, 6}

	res := MinimumWaitingTime(xs)
	fmt.Println(res)
}
