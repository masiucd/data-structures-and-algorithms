package main

func numberOfWaysToMakeChange(n int, denoms []int) int {
	ways := make([]int, n+1)
	ways[0] = 1
	fillList(&ways, n)

	for _, denom := range denoms {
		for i := 1; i < n+1; i++ {
			if denom <= i {
				ways[i] += ways[i-denom]
			}
		}
	}

	return ways[n]
}

func fillList(list *[]int, n int) {
	for i := 1; i < n+1; i++ {
		(*list)[i] = 0
	}
}
