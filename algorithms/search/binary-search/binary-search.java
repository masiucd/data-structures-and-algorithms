import java.util.*;

class Program {
  public static int binarySearch(int[] array, int target) {
    int startIndex = 0;
    int endIndex = array.length - 1;

    while (startIndex <= endIndex) {
      int middleIndex = (startIndex + endIndex) / 2;
      if (array[middleIndex] == target)
        return middleIndex;
      if (target < array[middleIndex]) {
        endIndex = middleIndex - 1;
      }
      if (target > array[middleIndex]) {
        startIndex = middleIndex + 1;
      }
    }
    return -1;
  }
}
