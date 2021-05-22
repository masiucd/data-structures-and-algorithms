import java.util.*;

class Program {

  static class MinMaxStack {
    List<Map<String, Integer>> minMaxStack = new ArrayList<Map<String, Integer>>();
    List<Integer> stack = new ArrayList<Integer>();

    public int peek() {
      return stack.get(stack.size() - 1);
    }

    public int pop() {
      minMaxStack.remove(minMaxStack.size() - 1);
      return stack.remove(stack.size() - 1);
    }

    public void push(Integer number) {
      Map<String, Integer> newMinMaxStack = new HashMap<String, Integer>();
      newMinMaxStack.put("min", number);
      newMinMaxStack.put("max", number);

      if (minMaxStack.size() > 0) {
        Map<String, Integer> lastMinMax = new HashMap<String, Integer>(minMaxStack.get(minMaxStack.size() - 1));
        newMinMaxStack.replace("min", Math.min(lastMinMax.get("min"), number));
        newMinMaxStack.replace("max", Math.max(lastMinMax.get("max"), number));
      }
      minMaxStack.add(newMinMaxStack);
      stack.add(number);
    }

    public int getMin() {
      return minMaxStack.get(minMaxStack.size() - 1).get("min");
    }

    public int getMax() {
      return minMaxStack.get(minMaxStack.size() - 1).get("max");
    }
  }
}
