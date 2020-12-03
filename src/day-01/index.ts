export function productOfTwo(list: number[]): number {
  for (const x of list) {
    for (const y of list) {
      if (x + y === 2020) {
        return x * y;
      }
    }
  }
  return -1; // like indexOf
}

export function productOfThree(list: number[]): number {
  for (const x of list) {
    for (const y of list) {
      for (const z of list) {
        if (x + y + z === 2020) {
          return x * y * z;
        }
      }
    }
  }
  return -1;
}

// The below is clever, but slow, because it brings the whole
// combinatoric combination of indices for three passes
// over the list into memory simultaneously.

// The clever but not slow way of making this work for an arbitrary
// (not only two or three) number of numbers summing to 2020 would be
// to have the cartesian product be a generator, like Python's
// itertools.product.

// function cartesian(...lists: number[][]): number[][] {
//   return lists.reduce(
//     (acc: number[][], curr: number[]) => {
//       return acc.flatMap(a => curr.map(c => [a, c].flat()));
//     },
//     [[]]
//   )
// }

// export function productOfTwo(list: number[]): number {
//   for (const [x, y] of cartesian(list, list)) {
//     if (x + y === 2020) {
//       return x * y;
//     }
//   }
//   return -1;
// }

// export function productOfThree(list: number[]): number {
//   //const grid = cartesian(list, list, list);
//   for (const [x, y, z] of cartesian(list, list, list)) {
//     if (x + y + z === 2020) {
//       return x * y * z;
//     }
//   }
//   return -1;
// }
