// Get canvas element by ID
const canvas = document.getElementById("canvas");
// Set canvas size
canvas.width = 400;
canvas.height = 400;
// Canvas context to 2D
const context = canvas.getContext("2d");
// Number of stars
const numStars = 100;
// Size of stars
const size = 1;
// Focal length
const fl = canvas.width;
const centerX = canvas.width / 2;
const centerY = canvas.width / 2;
// Generate stars
const stars = [];
for (let i = 0; i < numStars; i++) {
  stars[i] = new Star();
}

// Function to single star
function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.z = Math.random() * canvas.width;

  this.show = function() {
    // Add 3d effect
    let x, y, s;

    x = (this.x - centerX) * (fl / this.z);
    x = x + centerX;

    y = (this.y - centerY) * (fl / this.z);
    y = y + centerY;

    s = size * (fl / this.z);
    // Place star on canvas
    context.beginPath();
    context.fillStyle = "#ffffff";
    context.arc(x, y, s, 0, 2 * Math.PI);
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

update();
