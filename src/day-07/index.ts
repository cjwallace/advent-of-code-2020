// part A

const bagRegExp = /(\w+ \w+)(?= bag)/g;

type Bag = {
  outer: string;
  inner: string[];
};

function parseBags([outer, ...rest]: string[]): Bag {
  return { outer, inner: rest };
}

function bagCanContainColor(bag: Bag, color: string): boolean {
  return bag.inner.includes(color);
}

function setEqual(a: Set<string>, b: Set<string>): boolean {
  return [...a].every((x) => b.has(x)) && a.size === b.size;
}

// this could be cleaned up by turning the allBags: Bag[] into a single object
// keyed by the color, as in part B
function getContainerBags(
  allBags: Bag[],
  colors: Set<string>,
): Set<string> {
  const set = new Set(
    [...colors].flatMap((color) =>
      allBags
        .filter((bag) => bagCanContainColor(bag, color))
        .map((x) => x.outer)
    ),
  );
  if (setEqual(colors, set)) {
    return colors;
  }
  return new Set([...colors, ...getContainerBags(allBags, set)]);
}

export function countContainingBags(input: string) {
  const bags = input.split("\n")
    .map((x) => x.match(bagRegExp) || [])
    .map((x) => parseBags(x));

  return getContainerBags(bags, new Set(["shiny gold"])).size - 1;
}

// part B

const numBagRegExp = /((\d+ )?\w+ \w+)(?= bag)/g;

function parseNumberBags(innerBag: string): { count: number; color: string } {
  const match = innerBag.match(/(?=(\d) (\w+ \w+))/) || [];
  return { count: parseInt(match[1]) || 1, color: match[2] };
}

type BagCount = {
  color: string;
  count: number;
};

function getContainedBags(allBags: any, color: string): number {
  if (!allBags[color]) return 0;

  const parsedBags = allBags[color].map((bag: string) => parseNumberBags(bag));

  return 1 +
    parsedBags.map((b: BagCount) =>
      b.count * getContainedBags(allBags, b.color)
    )
      .reduce((
        a: number,
        b: number,
      ) => a + b);
}

export function countContainedBags(input: string) {
  const bags = input.split("\n")
    .map((x) => x.match(numBagRegExp) || [])
    .map(([k, ...v]) => ({ [k]: v }))
    .reduce((a, b) => ({ ...a, ...b }));

  return getContainedBags(bags, "shiny gold") - 1; // don't count outer bag
}
