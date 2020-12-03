import { countNewValidPasswords, countOldValidPasswords } from "./index.ts";

const input = Deno.readTextFile("./src/day-02/input.txt") // from TLD
  .then((list) => list.split("\n"));

console.log(countOldValidPasswords(await input));
console.log(countNewValidPasswords(await input));
