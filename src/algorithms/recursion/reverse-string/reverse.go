package reversestring

// ReverseString func
func ReverseString(s string) string {
	if s == "" {
		return ""
	}

	return ReverseString(s[1:]) + string(s[0])

}