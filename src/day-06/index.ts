export function union(group: string[]) {
  return group
    .map((x) => new Set(x))
    .reduce((a, b) => new Set([...a, ...b]));
}

export function intersection(group: string[]) {
  return group
    .map((x) => new Set(x))
    .reduce((a, b) => new Set(Array.from(a).filter((x) => b.has(x))));
}

export function sumOfCounts(
  input: string,
  aggregate: (group: string[]) => Set<string>,
): number {
  return input.split("\n\n")
    .map((x) => x.split("\n"))
    .map((x) => aggregate(x))
    .map((x) => x.size)
    .reduce((a, b) => a + b);
}
