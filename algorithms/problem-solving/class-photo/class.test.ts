import { assertEquals } from "../../../package.ts"
import { classPhotos } from "./class.ts"

Deno.test({
  name: "classPhotos",
  fn: () => {
    const reds = [5, 8, 1, 3, 4]
    const blues = [6, 9, 2, 4, 5]

    assertEquals(classPhotos(reds, blues), true)
  },
})
