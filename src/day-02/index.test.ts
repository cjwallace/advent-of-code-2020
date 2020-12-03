import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { countNewValidPasswords, countOldValidPasswords } from "./index.ts";

const testInput = [
  "1-3 a: abcde",
  "1-3 b: cdefg",
  "2-9 c: ccccccccc",
];

Deno.test("Day 02a", () => {
  assertEquals(countOldValidPasswords(testInput), 2);
});

Deno.test("Day 02b", () => {
  assertEquals(countNewValidPasswords(testInput), 1);
});
