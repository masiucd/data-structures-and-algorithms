/**
 * WithJava
 */
public class WithJava {

  public static void main(String[] args) {
    int[] xs = { 1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3 };
    int res = longestPeak(xs);
    System.out.println(res);
  }

  public static int longestPeak(int[] array) {
    int longestPeak = 0;
    int i = 1;

    while (i < array.length - 1) {
      boolean isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

      if (!isPeak) {
        i++;
        continue;
      }

      int leftIndex = i - 2;
      while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
        leftIndex--;
      }
      int rightIndex = i + 2;
      while (rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {
        rightIndex++;
      }

      int current = rightIndex - leftIndex - 1;
      if (current > longestPeak) {
        longestPeak = current;
      }
      i = rightIndex;
    }
    return longestPeak;
  }

}