import { selectionSort } from "./index.ts";
import { assertEquals } from "../../../package.ts";
Deno.test({
  name: "Selection sort",
  fn: () => {
    const xs = [9, 2, 89, 1, -2];
    const expected = [-2, 1, 2, 9, 89];
    assertEquals(selectionSort(xs), expected);
  },
});
