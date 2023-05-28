const canvas = document.querySelector(".canvas");

canvasMaker();

// Function that is checking if mouse is down (used with mousemove)
function andMouseDown (e) {
  if (e.buttons == 1) {
    e.preventDefault();
    color(e)
  }
}

// Function that colors pixels
function color (e) {
  e.target.style.backgroundColor = "black";
}

// Creates "pixels" in canvas, parameter is number of pixels in row/column
function canvasMaker (n = 16) {
  // Creates, alters and appends "pixels" in canvas (number of them is n x n)
  for (let i = 0; i < (n * n); i++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("style", `width: ${500/n}px; height: ${500/n}px;`);
    pixel.addEventListener("mousemove", andMouseDown);
    pixel.addEventListener("mousedown", color)
    canvas.appendChild(pixel);
  }
}