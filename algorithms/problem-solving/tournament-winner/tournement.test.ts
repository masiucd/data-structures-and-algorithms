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
    let result = tournamentWinner(xs, [0, 0, 1]);
    let expected = "Python";
    assertEquals(result, expected);

    result = tournamentWinner(
      [
        ["Bulls", "Eagles"],
        ["Bulls", "Bears"],
        ["Bulls", "Monkeys"],
        ["Eagles", "Bears"],
        ["Eagles", "Monkeys"],
        ["Bears", "Monkeys"],
      ],
      [1, 1, 1, 1, 1, 1],
    );
    expected = "Bulls";
    assertEquals(result, expected);
  },
});
