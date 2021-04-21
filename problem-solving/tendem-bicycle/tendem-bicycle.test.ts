import { assertEquals } from "../../package.ts";
import { tandemBicycle } from "./with-ts.ts";
Deno.test({
  name: "tendemBicycle",
  fn: () => {
    const blueShirtSpeeds = [5, 5, 3, 9, 2];
    const redShirtSpeeds = [3, 6, 7, 2, 1];
    let isFastest = true;

    let res = tandemBicycle(blueShirtSpeeds, redShirtSpeeds, isFastest);
    assertEquals(res, 32);

    isFastest = false;
    res = tandemBicycle(blueShirtSpeeds, redShirtSpeeds, isFastest);
    assertEquals(res, 25);
  },
});
