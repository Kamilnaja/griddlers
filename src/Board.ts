import { Cell, CellValue } from "./Cell";
import { Picture } from "./Picture";

export class Board {
  constructor(private ctx: CanvasRenderingContext2D) {}

  calculateCellSize(picture: Picture) {
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    const { width, height } = canvas;
    let minorDimention = width > height ? height : width;
    return minorDimention / picture.length;
  }

  drawTable(picture: Picture): void {
    const cellSize = this.calculateCellSize(picture);
    let widthOverlap = 0;

    picture.forEach((cell) => {
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = "grey";
      let heightOverlap = 0;

      cell.forEach((v) => {
        this.fillCell(heightOverlap, widthOverlap, cellSize, !!v);
        heightOverlap = heightOverlap + cellSize;
      });
      widthOverlap = widthOverlap + cellSize;
    });
  }

  private fillCell(
    widthOverlap: number,
    heightOverlap: number,
    cellSize: number,
    isEmpty: boolean
  ) {
    this.ctx.fillStyle = isEmpty ? "black" : "white";
    this.ctx.fillRect(widthOverlap, heightOverlap, cellSize, cellSize);
    this.ctx.strokeRect(widthOverlap, heightOverlap, cellSize, cellSize);
  }

  countConsecutiveCells(row: CellValue[]): number[] {
    let res = [];
    let temp = 0;

    row.forEach((item) => {
      if (item) {
        temp++;
      } else {
        temp && res.push(temp);
        temp = 0;
      }
    });
    temp && res.push(temp);
    console.log(res);

    return res;
  }
}
