package uniqsort

import "fmt"

// UniqSort algorithm
func UniqSort(xs []int) []int {
	cache := make(map[int]bool)
	res := []int{}

	for _, v := range xs {
		if !cache[v] {
			cache[v] = true
			res = append(res, v)
		}
	}
	fmt.Println(cache)
	return res
}
