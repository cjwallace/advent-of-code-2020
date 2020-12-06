import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { intersection, sumOfCounts, union } from "./index.ts";

const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;

Deno.test("Day 06a", () => {
  assertEquals(sumOfCounts(testInput, union), 11);
});

Deno.test("Day 06b", () => {
  assertEquals(sumOfCounts(testInput, intersection), 6);
});
