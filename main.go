package main

import "fmt"

func increment(n int) func() int {
	return func() int {
		n++
		fmt.Println(n)
		return n
	}
}

func main() {
	incByTwo := increment(2)
	x := incByTwo
	x()
	x()
	x()
	x()
	x()

	// fmt.Println(x)
}
