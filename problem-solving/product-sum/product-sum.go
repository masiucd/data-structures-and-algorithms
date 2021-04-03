package main

import (
	"fmt"
)

type SpecialArray []interface{}

func ProductSum(xs SpecialArray) int {
	return fn(xs, 1)
}

func fn(array []interface{}, m int) int {

	sum := 0
	for _, x := range array {
		if cast, ok := x.(SpecialArray); ok {
			sum += fn(cast, m+1)
		} else if cast, ok := x.(int); ok {
			sum += cast
		}
	}

	return sum * m
}

func main() {

	xs := SpecialArray{5, 2, SpecialArray{7, -1}, 3, SpecialArray{6, SpecialArray{-13, 8}, 4}}


	res := ProductSum(xs)
	fmt.Println(res)
}
