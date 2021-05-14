package main

import "fmt"

func phoneNumberMnemonics(phoneNumber string) []string {
	mnemonics := make([]byte, len(phoneNumber))
	fill(&mnemonics, '0')
	res := make([]string, 0)

	pickLetter(0, phoneNumber, mnemonics, &res)

	return res
}

func main() {
	r := phoneNumberMnemonics("1205")
	fmt.Println(r)
}

var digitMap = map[byte][]byte{
	'0': {'0'},
	'1': {'1'},
	'2': {'a', 'b', 'c'},
	'3': {'d', 'e', 'f'},
	'4': {'g', 'h', 'i'},
	'5': {'j', 'k', 'l'},
	'6': {'m', 'n', 'o'},
	'7': {'p', 'q', 'r', 's'},
	'8': {'t', 'u', 'v'},
	'9': {'w', 'x', 'y', 'z'},
}

func fill(b *[]byte, byteToFillWith byte) {
	for i := range *b {
		(*b)[i] = byteToFillWith
	}
}

func pickLetter(index int, phoneNumber string, mnemonics []byte, res *[]string) {
	if index == len(phoneNumber) {
		mnemonic := string(mnemonics)
		*res = append(*res, mnemonic)
	} else {
		number := phoneNumber[index]
		letters := digitMap[number]

		for _, letter := range letters {
			mnemonics[index] = letter
			pickLetter(index+1, phoneNumber, mnemonics, res)
		}
	}
}
