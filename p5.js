
function setup() {
  createCanvas(600, 400);
}

// Draws the entire underwater background
function draw() {
  background(0, 120, 200);

  drawOceanFloor();
  drawSeaweed(70, 340, 1);
  drawSeaweed(520, 340, 1.3);

  drawFish(150, 130, 1);
  drawFish(330, 210, 0.8);
  let bigFishSize = calculateFishSize(1);
drawFish(450, 100, bigFishSize);

  drawBubble(100, 100, 15);
  drawBubble(280, 80, 20);
  drawBubble(400, 280, 12);

  drawCoral(250, 350, 1);
  drawCoral(380, 350, 0.8);
}

// Draws the sandy ocean floor
function drawOceanFloor() {
  noStroke();
  fill(235, 200, 120);
  rect(0, 350, width, 50);

  fill(255, 220, 140);
  ellipse(100, 365, 30, 8);
  ellipse(450, 380, 40, 10);
}

// Draws a fish using position and size parameters
function drawFish(x, y, size) {
  // Local variable: controls the fish body width
  let bodyWidth = 60 * size;

  push();
  translate(x, y);
  scale(size);

  noStroke();
  fill(255, 150, 30);
  ellipse(0, 0, bodyWidth, 35);

  // Fish tail
  fill(255, 100, 20);
  triangle(-25, 0, -45, -15, -45, 15);

  // Fish eye
  fill(255);
  ellipse(18, -5, 10, 10);
  fill(0);
  ellipse(20, -5, 4, 4);

  pop();
}

// Draws bubbles of different sizes
function drawBubble(x, y, size) {
  noFill();
  stroke(220, 250, 255);
  strokeWeight(2);
  ellipse(x, y, size, size);
  noStroke();
}

// Draws seaweed with adjustable height
function drawSeaweed(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  noStroke();
  fill(20, 150, 80);

  ellipse(-10, -25, 15, 50);
  ellipse(5, -45, 15, 60);
  ellipse(15, -20, 15, 40);

  pop();
}

// Draws colorful coral
function drawCoral(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  stroke(255, 80, 100);
  strokeWeight(8);
  strokeCap(ROUND);

  line(0, 0, 0, -35);
  line(0, -20, -15, -35);
  line(0, -25, 15, -45);

  noStroke();
  pop();
}

 // Calculates the size of a fish based on its original size
function calculateFishSize(size) {
  let adjustedSize = size * 1.2;
  return adjustedSize;
}
