import { Board } from "./Board";
import { one, three, two } from "./data";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

const ctx = canvas.getContext("2d");
const picture = three;

const b = new Board(ctx);
b.drawTable(picture);
