type Slope = {
  right: number;
  down: number;
};

export const slopes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

export function countTreesOnSlope(
  grid: string[],
  slope: Slope,
): number {
  const [width, height] = [grid[0].length, grid.length];

  let path = "";
  let [x, y] = [slope.right, slope.down];

  while (y < height) {
    path += grid[y][x % width];
    x += slope.right;
    y += slope.down;
  }

  return (path.match(/#/g) || []).length;
}

export function multiplyTreesOnAllSlopes(
  grid: string[],
  slopes: Slope[],
): number {
  const counts = slopes.map((s) => countTreesOnSlope(grid, s));
  return counts.reduce((a, b) => a * b);
}

const input = Deno.readTextFile("./src/day-03/input.txt") // from TLD
  .then((list) => list.split("\n"));

console.log(countTreesOnSlope(await input, slopes[1]));
console.log(multiplyTreesOnAllSlopes(await input, slopes));
