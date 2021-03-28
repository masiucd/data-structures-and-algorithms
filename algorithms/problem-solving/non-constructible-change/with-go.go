package main

import "sort"

func NonConstructibleChange(coins []int) int {
	currentChange := 0
	sort.Ints(coins)
	for _, coin := range coins {
		if coin > currentChange+1 {
			return currentChange + 1
		}
		currentChange += coin
	}
	return currentChange + 1
}
