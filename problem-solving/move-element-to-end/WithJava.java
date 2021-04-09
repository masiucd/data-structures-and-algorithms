import java.util.ArrayList;
import java.util.List;

/**
 * WithJava
 */
public class WithJava {

  private static void swap(int i, int j, List<Integer> xs) {
    int temp = xs.get(j);
    xs.set(j, xs.get(i));
    xs.set(i, temp);
  }

  public static List<Integer> moveElementToEnd(List<Integer> array, int toMove) {
    int start = 0;
    int end = array.size() - 1;
    while (start < end) {
      while (start < end && array.get(end) == toMove)
        end--;

      if (array.get(start) == toMove)
        swap(start, end, array);
      start++;

    }

    return array;
  }

}