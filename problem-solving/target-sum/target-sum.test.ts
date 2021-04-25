import { assertEquals } from "../../package.ts";
import { twoNumberSum1, twoNumberSum2, twoNumberSum3 } from "./target-sum.ts";

Deno.test({
  name: "twoNumberSum1",
  fn: () => {
    assertEquals(twoNumberSum1([1, 2, 5, -4], 3), [1, 2]);
  },
});
Deno.test({
  name: "twoNumberSum2",
  fn: () => {
    assertEquals(twoNumberSum2([1, 2, 5, -4], 3), [1, 2]);
  },
});
Deno.test({
  name: "twoNumberSum3",
  fn: () => {
    assertEquals(twoNumberSum3([1, 2, 5, -4], 3), [1, 2]);
  },
});
