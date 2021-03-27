import { tournamentWinner } from "./with-ts.ts";
import { assertEquals } from "../../../package.ts";
Deno.test({
  name: "tournamanet",
  fn: () => {
    const xs = [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ];
    const result = tournamentWinner(xs, [0, 0, 1]);
    const expected = "Python";
    assertEquals(result, expected);
  },
});
