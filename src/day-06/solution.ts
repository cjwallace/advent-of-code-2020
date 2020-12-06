import { intersection, sumOfCounts, union } from "./index.ts";

const input = Deno.readTextFile("./src/day-06/input.txt"); // from TLD;
console.log(sumOfCounts(await input, union));
console.log(sumOfCounts(await input, intersection));
