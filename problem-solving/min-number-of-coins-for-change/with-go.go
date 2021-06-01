package main

import (
	"math"
)

// MinNumberOfCoinsForChange func
func MinNumberOfCoinsForChange(n int, denoms []int) int {
	numOfCoins := makeNomOfCoins(n)
	numOfCoins[0] = 0

	for _, denom := range denoms {
		for i := 0; i < len(numOfCoins); i++ {
			if denom <= i {
				numOfCoins[i] = min(numOfCoins[i], numOfCoins[i-denom]+1)
			}
		}
	}

	if numOfCoins[n] != math.MaxInt32 {
		return numOfCoins[n]
	}
	return -1
}

func makeNomOfCoins(n int) []int {
	numOfCoins := make([]int, n+1)

	for i := range numOfCoins {
		numOfCoins[i] = math.MaxInt32
	}
	return numOfCoins
}

func min(a int, rest ...int) int {
	current := a
	for _, n := range rest {
		if n < current {
			current = n
		}
	}
	return current
}
