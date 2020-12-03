import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import {
  countTreesOnSlope,
  multiplyTreesOnAllSlopes,
  slopes,
} from "./index.ts";

const testInput = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

Deno.test("Day 03a", () => {
  assertEquals(countTreesOnSlope(testInput, slopes[1]), 7);
});

Deno.test("Day 03b", () => {
  assertEquals(multiplyTreesOnAllSlopes(testInput, slopes), 336);
});
