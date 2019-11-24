// Get canvas element by ID
const canvas = document.getElementById("canvas");
// Set canvas size
canvas.width = 1000;
canvas.height = 800;
// Canvas context to 2D
const context = canvas.getContext("2d");
// Number of stars
const numStars = 1000;
// Size of stars
const size = 0.3;
// Speed
const speed = 1.5;
// Focal length
const fl = canvas.width;
const centerX = canvas.width / 2;
const centerY = canvas.width / 2;
// Star colors
const colorObj = {
  color1: "#DED0C5",
  color2: "#D0ECF5",
  color3: "#E59B67",
  color4: "#C1A9FA",
  color5: "#FBFFFF"
};
// Pull random color from colorObj
function getRandomColor(obj) {
  const keys = Object.keys(obj);
  return obj[keys[Math.floor(keys.length * Math.random())]];
}
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
  this.color = getRandomColor(colorObj);

  this.move = function() {
    this.z = this.z - speed;
    if (this.z <= 0) {
      this.z = canvas.width;
    }
  };

  // Show star method
  this.show = function(index) {
    // Add 3d effect
    let x, y, s;

    x = (this.x - centerX) * (fl / this.z);
    x = x + centerX;

    y = (this.y - centerY) * (fl / this.z);
    y = y + centerY;

    s = size * (fl / this.z);
    // Place star on canvas
    context.beginPath();
    context.fillStyle = stars[index].color;
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
    stars[i].show(i);
    stars[i].move();
  }
}

// Update
function update() {
  draw();
  window.requestAnimationFrame(update);
}

update();
