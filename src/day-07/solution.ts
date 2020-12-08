import { countContainedBags, countContainingBags } from "./index.ts";

const input = Deno.readTextFile("./src/day-07/input.txt"); // from TLD;
console.log(countContainingBags(await input));
console.log(countContainedBags(await input));
