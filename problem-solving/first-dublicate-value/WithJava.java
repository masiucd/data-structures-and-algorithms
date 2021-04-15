import java.util.*;

class Program {

  public int firstDuplicateValue(int[] array) {
    HashMap<Integer, Boolean> hasSeenNumber = new HashMap<Integer, Boolean>();

    for (int n : array) {
      if (hasSeenNumber.containsKey(n)) {
        return n;
      }
      hasSeenNumber.put(n, true);
    }
    return -1;
  }
}
