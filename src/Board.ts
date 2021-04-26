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
      this.ctx.strokeStyle = "#FF0000";
      this.ctx.fillStyle = "white";
      let heightOverlap = 0;
      cell.forEach(() => {
        this.ctx.strokeRect(widthOverlap, heightOverlap, cellSize, cellSize);
        heightOverlap = heightOverlap + cellSize;
      });
      widthOverlap = widthOverlap + cellSize;
    });
  }
}
