type Direction = "F" | "B" | "L" | "R";

type BinaryMap = {
  [d in Direction]: 0 | 1;
};

const binaryMap: BinaryMap = { F: 0, B: 1, L: 0, R: 1 };

function directionsToBinary(directions: string): string {
  return directions
    .split("")
    .map((x) => binaryMap[x as Direction])
    .join("");
}

function binaryToDecimal(binaryString: string): number {
  return parseInt(binaryString, 2);
}

function directionsToDecimal(directionString: string): number {
  return binaryToDecimal(directionsToBinary(directionString));
}

function seatId(row: number, column: number): number {
  return row * 8 + column;
}

function parseSeat(seat: string) {
  const row = directionsToDecimal(seat.slice(0, 7));
  const col = directionsToDecimal(seat.slice(7, 10));
  const id = seatId(row, col);
  return { row, col, id };
}

export function highestSeatId(input: string) {
  return input.split("\n")
    .map((seat) => parseSeat(seat))
    .reduce((maxSeatId, seat) => Math.max(maxSeatId, seat.id), 0);
}

function findSeat(sortedIds: number[]): number {
  for (let i = 0; i < sortedIds.length; i++) {
    if (sortedIds[i + 1] === sortedIds[i] + 2) return sortedIds[i] + 1;
  }
  return -1;
}

export function mySeat(input: string): number {
  const sortedIds = input.split("\n")
    .map((seat) => parseSeat(seat))
    .map((seat) => seat.id)
    .sort();

  return findSeat(sortedIds);
}
