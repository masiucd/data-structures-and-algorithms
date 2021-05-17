package main

import "fmt"

func fib(n int) int {
	if n <= 2 {
		return n
	}

	return fib(n-1) + fib(n-2)
}

func memoize(n int, fn func(n int) int) int {
	cache := make(map[int]int)
	_, ok := cache[n]

	if ok {
		return cache[n]
	}
	res := fn(n)
	cache[n] = res
	return res
}

func main() {
	res := memoize(5, fib)
	fmt.Println(res)
}
