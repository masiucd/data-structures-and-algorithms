import java.util.*;

class Program {

  public int[] nextGreaterElement(int[] array) {
    int[] result = new int[array.length];
    Arrays.fill(result, -1);
    Stack<Integer> stack = new Stack<Integer>();

    for (int i = 0; i < 2 * array.length; i++) {
      int circularIndex = i % array.length;
      while (stack.size() > 0 && array[stack.peek()] < array[circularIndex]) {
        int topIndex = stack.pop();
        result[topIndex] = array[circularIndex];
      }
      stack.push(circularIndex);
    }

    return result;
  }
}
