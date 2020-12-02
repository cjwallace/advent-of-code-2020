import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { productOfTwo, productOfThree } from "./index.ts";

const testInput = [1721, 979, 366, 299, 675, 1456];

Deno.test("Day 01a", () => {
  assertEquals(productOfTwo(testInput), 514579);
})

Deno.test("Day 01b", () => {
  assertEquals(productOfThree(testInput), 241861950);
})