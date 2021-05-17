import java.util.*;

class Program {

  public static Map<Character, String[]> digitMap = new HashMap<Character, String[]>();

  static {
    digitMap.put('0', new String[] { "0" });
    digitMap.put('1', new String[] { "1" });
    digitMap.put('2', new String[] { "a", "b", "c" });
    digitMap.put('3', new String[] { "d", "e", "f" });
    digitMap.put('4', new String[] { "g", "h", "i" });
    digitMap.put('5', new String[] { "j", "k", "l" });
    digitMap.put('6', new String[] { "m", "n", "o" });
    digitMap.put('7', new String[] { "p", "q", "r", "s" });
    digitMap.put('8', new String[] { "t", "u", "v" });
    digitMap.put('9', new String[] { "w", "x", "y", "z" });
  }

  public ArrayList<String> phoneNumberMnemonics(String phoneNumber) {
    ArrayList<String> res = new ArrayList<String>();
    String[] currentMnemonics = new String[phoneNumber.length()];
    Arrays.fill(currentMnemonics, "0");

    pickLetter(0, phoneNumber, currentMnemonics, res);

    return res;
  }

  public void pickLetter(int index, String phoneNumber, String[] currentMnemonics, ArrayList<String> res) {
    if (index == phoneNumber.length()) {
      String mnemonic = String.join("", currentMnemonics);
      res.add(mnemonic);
    } else {
      char digit = phoneNumber.charAt(index);
      String[] letters = digitMap.get(digit);

      for (String letter : letters) {
        currentMnemonics[index] = letter;
        pickLetter(index + 1, phoneNumber, currentMnemonics, res);
      }
    }
  }

}
