import { Board } from "./Board";
import { one, six, three, two, four } from "./data";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const b = new Board(ctx);
b.drawTable(four);
// b.countConsecutiveCells([1, 0, 0, 1]);

console.assert(
  JSON.stringify(b.countConsecutiveCells([1])) === JSON.stringify([1]),
  "1 !== 1"
);
console.assert(
  JSON.stringify(b.countConsecutiveCells([1, 0])) === JSON.stringify([1]),
  "[1, 0] !== 1"
);
console.assert(
  JSON.stringify(b.countConsecutiveCells([1, 0, 0, 1])) ===
    JSON.stringify([1, 1]),
  "[1, 0, 0, 1] !== 1, 1"
);
console.assert(
  JSON.stringify(b.countConsecutiveCells([1, 1, 0, 0, 1])) ===
    JSON.stringify([2, 1]),
  "[1, 0, 0, 1] !== 2, 1"
);
