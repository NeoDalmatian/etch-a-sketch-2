const canvas = document.querySelector(".canvas");

canvasMaker();

// Creates "pixels" in canvas, parameter is number of pixels in row/column
function canvasMaker (n = 16) {
  // Determines real size of "pixels" in px, with 500 being dimension of canvas
  let pixelSize = 500/n;
  // Creates, alters and appends "pixels" in canvas (number of them is n x n)
  for (let i = 0; i < (n * n); i++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("style", `width:${pixelSize}px; height:${pixelSize}px;`)
    canvas.appendChild(pixel);
  }
}