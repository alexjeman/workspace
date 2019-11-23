// Get canvas element by ID
let canvas = document.getElementById("canvas");
// Set canvas size
canvas.width = 400;
canvas.height = 400;
// Canvas context to 2D
let context = canvas.getContext("2d");
// Number of stars
var numStars = 100;
// Size of stars
var size = 1;
// Generate stars
var stars = [];
for (let i = 0; i < numStars; i++) {
  stars[i] = new Star();
}

// Function to single star
function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.z = Math.random() * canvas.width;

  this.show = function() {
    context.beginPath();
    context.fillStyle = "#ffffff";
    context.arc(this.x, this.y, size, 0, 2 * Math.PI);
    context.fill();
  };
}

// Draw
function draw() {
  // Canvas background
  context.fillStyle = "#000000";
  // Draw a rectangle on canvas;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numStars; i++) {
    stars[i].show();
  }
}

// Update
function update() {
  draw();
  window.requestAnimationFrame(update);
}
console.log(stars);
update();
