package linear

// Linear algorithm
func Linear(xs []int , target int) int  {
		for i, n:=range xs {
			if n == target {
				return i
			}
		}

		return -1
}

