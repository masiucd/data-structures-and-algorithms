package main

import (
	"sort"
)

// TandemBicycle func
func TandemBicycle(redShirtSpeeds []int, blueShirtSpeeds []int, fastest bool) int {
	sort.Ints(redShirtSpeeds)
	sort.Ints(blueShirtSpeeds)

	// fmt.Println(redShirtSpeeds)
	// fmt.Println(blueShirtSpeeds)

	if !fastest {
		reverse(redShirtSpeeds)
	}

	startIndex, endIndex := 0, len(redShirtSpeeds)-1
	res := 0
	for startIndex <= len(blueShirtSpeeds)-1 {
		res += max(redShirtSpeeds[endIndex], blueShirtSpeeds[startIndex])
		startIndex++
		endIndex--
	}

	return res

}

func reverse(xs []int) {
	start, end := 0, len(xs)-1

	for start < end {
		temp := xs[start]
		xs[start] = xs[end]
		xs[end] = temp
		start++
		end--
	}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	// blueShirtSpeeds := []int{5, 5, 3, 9, 2}
	// redShirtSpeeds := []int{3, 6, 7, 2, 1}

	// res := TandemBicycle(blueShirtSpeeds, redShirtSpeeds, true)
	// fmt.Println(res)
}
