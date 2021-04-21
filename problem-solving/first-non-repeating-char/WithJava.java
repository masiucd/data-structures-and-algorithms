import java.util.*;

class Program {

  public int firstNonRepeatingCharacter(String string) {
    for (int i = 0; i < string.length(); i++) {
      int character = string.charAt(i);
      boolean isDuplicate = false;

      for (int j = 0; j < string.length(); j++) {
        int characterToCompare = string.charAt(j);

        if (character == characterToCompare && i != j) {
          isDuplicate = true;
        }
      }
      if (!isDuplicate)
        return i;
    }
    return -1;
  }

  public int firstNonRepeatingCharacter2(String string) {
    HashMap<Character, Integer> store = new HashMap<Character, Integer>();

    for (int i = 0; i < string.length(); i++) {
      char character = string.charAt(i);
      if (store.containsKey(character)) {
        store.put(character, store.get(character) + 1);
      } else {
        store.put(character, 1);
      }
    }

    for (int i = 0; i < string.length(); i++) {
      char character = string.charAt(i);
      if (store.get(character) == 1) {
        return i;
      }
    }

    return -1;
  }
}
