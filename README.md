# Advent of Code 2020

Attempting [Advent of Code](https://adventofcode.com/) 2020 in TypeScript, with [Deno](https://deno.land/).

Print solutions with `deno run --allow-read src/day-xx/solution.ts` from the root directory of this project (for correct relative file location reading).
The `--allow-read` flag allows reading the input data from the filesystem.
The input for each problem is stored in the corresponding `day-xx` directory.

Run tests for each problem with `deno run src/day-xx`. (The allow read is necessary because we import from a file that requires it).
