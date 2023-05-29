const canvas = document.querySelector(".canvas");
const canvasSizeButton = document.querySelector(".canvasSize");
const colorSelector = document.querySelector("#colorSelector");

let selectedColor = "black"

// takes input from color input and puts it in color function
colorSelector.addEventListener("input", (e) => {
  selectedColor = e.target.value;
})

canvasSizeButton.addEventListener("click", () => {
  // Makes canvas with argument being determined by prompt
  canvasMaker(prompt("Please enter number between 1 and 100"));
});

// Makes default canvas size 16x16
canvasMaker(16);

// Function that is checking if mouse is down (used with mousemove)
function andMouseDown (e) {
  if (e.buttons == 1) {
    e.preventDefault();
    color(e);
  }
}

// Function that colors pixels
function color (e) {
  e.target.style.backgroundColor = `${selectedColor}`;
}

// Creates "pixels" in canvas, parameter is number of pixels in row/column
function canvasMaker (n) {
  if (n > 0 && n <= 100) {
    canvasEraser();
    // Creates, alters and appends "pixels" in canvas (number of them is n x n)
    for (let i = 0; i < (n * n); i++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("style", `width: ${500/n}px; height: ${500/n}px;`);
      pixel.addEventListener("mousemove", andMouseDown);
      pixel.addEventListener("mousedown", color)
      canvas.appendChild(pixel);
    }
  } else {
    alert("number invalid, try again.");
  }
}

// Removes all content from canvas with replaceChildren() API because it is 
// faster than innerHTML and simpler than loop to remove all children one by one.
function canvasEraser () {
  canvas.replaceChildren();
}