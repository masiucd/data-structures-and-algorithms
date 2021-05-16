import java.util.*;

class Sunset {

  public ArrayList<Integer> sunsetViews(int[] buildings, String direction) {
    ArrayList<Integer> buildingsWithSunset = new ArrayList<>();
    int startIndex = -1;
    int step = -1;

    if (direction.equals("EAST")) {
      startIndex = 0;
      step = 1;
    }

    int idx = startIndex;
    int currentMaxHeight = 0;
    while (idx >= 0 && idx < buildings.length) {
      int currentBuildingHeight = buildings[idx];

      if (currentBuildingHeight > currentMaxHeight) {
        buildingsWithSunset.add(idx);
      }
      currentMaxHeight = Math.max(currentMaxHeight, currentBuildingHeight);

      idx += step;
    }

    if (direction.equals("EAST")) {
      Collections.reverse(buildingsWithSunset);
    }

    return buildingsWithSunset;
  }

  public ArrayList<Integer> sunsetViews2(int[] buildings, String direction) {
    ArrayList<Integer> stack = new ArrayList<>();
    int startIndex = direction.equals("WEST") ? buildings.length - 1 : 0;
    int step = direction.equals("WEST") ? -1 : 1;

    int idx = startIndex;
    while (idx >= 0 && idx < buildings.length) {
      int building = buildings[idx];
      while (stack.size() > 0 && buildings[stack.get(stack.size() - 1)] <= building) {
        stack.remove(stack.size() - 1);
      }
      stack.add(idx);
      idx += step;
    }

    if (direction.equals("WST")) {
      Collections.reverse(stack);
    }

    return stack;
  }
}
