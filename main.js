let x;
let y;
let w = 20;
let h = 40;
function setup() {
  createCanvas(400, 400);
  background(200);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(200);
  if (
    mouseX <= x + w &&
    mouseX + w >= x &&
    mouseY + h >= y &&
    mouseY <= y + h
  ) {
    x = Math.floor(Math.random() * 300) + 1;
    y = Math.floor(Math.random() * 300) + 1;
  }
  fill(250, 250, 250);
  rect(x, y, 20, 20);

  fill(255, 0, 0);
  rect(mouseX, mouseY, w, h);
}
