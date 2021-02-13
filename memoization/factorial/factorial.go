package factorial

// Fac example
func Fac(n int) int {
	if n < 2 {
		return n
	}
	return n * Fac(n-1)
}
