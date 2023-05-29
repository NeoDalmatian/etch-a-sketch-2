const canvas = document.querySelector(".canvas");
const canvasSizeButton = document.querySelector(".canvasSize");
const colorSelector = document.querySelector("#colorSelector");
const eraser = document.querySelector(".eraser");
const random = document.querySelector(".random");

let selectedColor = "black"
let randomToggle = false;

// Toggles random color combination
random.addEventListener("click", () => {
  randomToggle = true;
})

// Puts default background color to color function
eraser.addEventListener("click", () => {
  randomToggle = false;
  selectedColor = "#cef6f4";
})

// Takes input from color input and puts it in color function
colorSelector.addEventListener("input", (e) => {
  randomToggle = false;
  selectedColor = e.target.value;
})

// Makes new canvas with custom size
canvasSizeButton.addEventListener("click", () => {
  // Makes canvas with argument being determined by prompt
  canvasMaker(prompt("Please enter number between 1 and 100"));
});

// Generates random number from 1 to 255 for random rgb color selection
function randomColor () {
  return Math.floor(Math.random() * 256)
}

// Function that is checking if mouse is down (used with mousemove)
function andMouseDown (e) {
  if (e.buttons == 1) {
    e.preventDefault();
    color(e);
  }
}

// Function that colors pixels
function color (e) {
  if (randomToggle) {
    e.target.style.backgroundColor =
    `rgb( ${randomColor()}, ${randomColor()}, ${randomColor()})`;
  } else {
    e.target.style.backgroundColor = `${selectedColor}`;
  }
}

// Creates "pixels" in canvas, parameter is number of pixels in row/column
function canvasMaker (n) {
  if (n > 0 && n <= 100) {
    // Erase all elements/"pixels" in canvas before making new one
    canvas.replaceChildren();
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

// Makes default canvas size 16x16
canvasMaker(16);