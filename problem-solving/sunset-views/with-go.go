package main

import (
	"sort"
)

// SunsetViews func
func SunsetViews(buildings []int, direction string) []int {
	buildingsWithSunset := []int{}

	startIndex := 0
	step := 1

	if direction == "EAST" {
		startIndex = len(buildings) - 1
		step = -1
	}

	idx := startIndex
	currentMaxHeight := 0

	for idx >= 0 && idx < len(buildings) {
		currentBuildingHeight := buildings[idx]

		if currentBuildingHeight > currentMaxHeight {
			currentMaxHeight = currentBuildingHeight
			buildingsWithSunset = append(buildingsWithSunset, idx)
		}
		idx = idx + step
	}

	if direction == "EAST" {
		sort.Ints(buildingsWithSunset)
	}

	return buildingsWithSunset
}

// SunsetViews2 func with a stack implementation
func SunsetViews2(buildings []int, direction string) []int {
	stack := make([]int, 0)
	startIndex := len(buildings) - 1
	step := -1

	if direction == "EAST" {
		startIndex = 0
		step = 1
	}

	idx := startIndex
	for idx >= 0 && idx < len(buildings) {
		currentBuildingHeight := buildings[idx]

		// if the top value of the stack is less then current height we are on now, then remove it from the stack
		for len(stack) > 0 && buildings[stack[len(stack)-1]] <= currentBuildingHeight {
			stack = stack[:len(stack)-1]
		}

		stack = append(stack, idx)
		idx += step

	}

	if direction == "WEST" {
		sort.Ints(stack)
	}

	return stack
}
