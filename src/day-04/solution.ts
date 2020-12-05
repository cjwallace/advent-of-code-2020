import { countPassports, countValidatedPassports } from "./index.ts";

const input = Deno.readTextFile("./src/day-04/input.txt"); // from TLD;
console.log(countPassports(await input));
console.log(countValidatedPassports(await input));
