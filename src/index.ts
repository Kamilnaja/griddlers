import { Board } from "./Board";
import { one, six, three, two } from "./data";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

const ctx = canvas.getContext("2d");
const picture = six;

const b = new Board(ctx);
b.drawTable(picture);
