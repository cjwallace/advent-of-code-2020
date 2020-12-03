import {
  countTreesOnSlope,
  multiplyTreesOnAllSlopes,
  slopes,
} from "./index.ts";

const input = Deno.readTextFile("./src/day-03/input.txt") // from TLD
  .then((list) => list.split("\n"));

console.log(countTreesOnSlope(await input, slopes[1]));
console.log(multiplyTreesOnAllSlopes(await input, slopes));
