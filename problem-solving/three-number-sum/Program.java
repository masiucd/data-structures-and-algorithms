import java.util.*;

public class Program {

  public static void main(String[] args) {
    int[] xs = { 12, 3, 1, 2, -6, 5, -8, 6 };
    int targetSum = 0;

    List<Integer[]> res = threeNumberSum(xs, targetSum);

  }

  public static List<Integer[]> threeNumberSum(int[] array, int targetSum) {
    Arrays.sort(array);
    List<Integer[]> result = new ArrayList<Integer[]>();
    for (int i = 0; i < array.length - 2; i++) {
      int left = i + 1;
      int right = array.length - 1;

      while (left < right) {
        int currentSum = array[i] + array[left] + array[right];
        if (currentSum == targetSum) {
          Integer[] newTriplet = { array[i], array[left], array[right] };
          result.add(newTriplet);
          right++;
          left--;
        } else if (currentSum < targetSum) {
          left++;
        } else if (currentSum > targetSum) {
          right--;
        }
      }
    }

    return result;
  }
}
