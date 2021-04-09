import java.util.*;

class Main {

  public int[] sortedSquaredArray(int[] array) {
    int[] sortedArray = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      int value = array[i];
      sortedArray[i] = value * value;
    }
    Arrays.sort(sortedArray);
    return sortedArray;
  }
}
