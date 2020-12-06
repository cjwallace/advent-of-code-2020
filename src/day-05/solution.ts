import { highestSeatId, mySeat } from "./index.ts";

const input = Deno.readTextFile("./src/day-05/input.txt"); // from TLD;
console.log(highestSeatId(await input));
console.log(mySeat(await input));
