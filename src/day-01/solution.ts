import { productOfTwo, productOfThree } from "./index.ts";

const input = Deno.readTextFile('./src/day-01/input.txt') // from TLD
  .then(list => list
    .split("\n")
    .map(x => parseInt(x))
  );

console.log(productOfTwo(await input));
console.log(productOfThree(await input));