package main

func perfectNumbers(n int) string {
	if n <= 0 {
		panic("Classification is only possible for natural numbers.")
	}

	numbers := []int{}

	for i := 1; i < n; i++ {
		if n%i == 0 {
			numbers = append(numbers, i)
		}
	}

	res := 0
	for i := 0; i < len(numbers); i++ {
		res += numbers[i]
	}

	return checkResult(n, res)
}

func checkResult(n, res int) string {
	switch true {
	case res == n:
		return "perfect"
	case res > n:
		return "abundant"
	case res < n:
		return "deficient"
	default:
		panic("Classification is only possible for natural numbers.")

	}
}
