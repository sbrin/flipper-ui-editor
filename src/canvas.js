
class Canvas {
  constructor() {
    this.canvasElement = document.getElementById("canvas");
    this.width = 128;
    this.height = 64;
    this.updateSize();
  }

  updateSize() {
    this.canvasElement.width = this.width;
    this.canvasElement.height = this.height;
    this.redraw();
  }

  redraw() {
    // Redraw the canvas with the new size
  }
}

const canvas = new Canvas();