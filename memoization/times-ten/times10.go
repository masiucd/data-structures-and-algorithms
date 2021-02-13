package timesten

// TimesTen function with closures
func TimesTen() func(int) int {
	cache := make(map[int]int)
	return func(n int) int {
		if cache[n] == n {
			return cache[n]
		} else {
			cache[n] = n * 10
			return cache[n]
		}

	}
}
