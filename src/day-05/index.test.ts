import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { highestSeatId } from "./index.ts";

const testInputA = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

Deno.test("Day 05a", () => {
  assertEquals(highestSeatId(testInputA), 820);
});
