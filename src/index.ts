import { Board } from "./Board";
import { data } from "./data";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

const ctx = canvas.getContext("2d");
const pic1 = data;

const b = new Board(ctx);
b.drawTable(pic1);
