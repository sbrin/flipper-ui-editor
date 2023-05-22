
class Inspector {
  constructor() {
    this.screenWidthInput = document.getElementById("screenWidth");
    this.screenHeightInput = document.getElementById("screenHeight");
    this.initEventListeners();
  }

  initEventListeners() {
    this.screenWidthInput.addEventListener("change", this.onScreenWidthChange.bind(this));
    this.screenHeightInput.addEventListener("change", this.onScreenHeightChange.bind(this));
  }

  onScreenWidthChange(event) {
    const newWidth = parseInt(event.target.value);
    if (newWidth >= 8 && newWidth <= 512) {
      canvas.width = newWidth;
      canvas.updateSize();
    } else {
      alert("Invalid screen width. Please enter a value between 8 and 512.");
    }
  }

  onScreenHeightChange(event) {
    const newHeight = parseInt(event.target.value);
    if (newHeight >= 8 && newHeight <= 512) {
      canvas.height = newHeight;
      canvas.updateSize();
    } else {
      alert("Invalid screen height. Please enter a value between 8 and 512.");
    }
  }
}

const inspector = new Inspector();