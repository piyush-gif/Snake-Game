let w = 400;
let h = 400;
let x = 190;
let y = 190;
let berryx = 150;
let berryy = 150;
let berryW = 10;
function setup() {
  createCanvas(w, h);
  background(200);
}

function draw() {
  background(200);
  fill("red");
  square(berryx, berryy, berryW);
  fill("orange");
  square(x, y, 15);
  square(x, y + 15, 15);
}

function keyPressed() {
  if (key === "w") {
    y -= 10;
  } else if (key === "a") {
    x -= 10;
  } else if (key === "s") {
    y += 10;
  } else if (key === "d") {
    x += 10;
  }
  if (x >= 400) {
    x = 0;
  } else if (x <= 0) {
    x = 400;
  } else if (y >= 400) {
    y = 0;
  } else if (y <= 0) {
    y = 400;
  }

  if (
    berryx <= x &&
    y <= berryy &&
    berryx + berryW >= x &&
    berryy + berryW >= y &&
    x + 15 >= berryx &&
    y + 15 >= berryy &&
    berryx + berryW >= x + 15 &&
    berryy + berryW >= y + 15
  ) {
    console.log("collied");
  }
}
