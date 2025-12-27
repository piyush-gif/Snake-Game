let rows;
let cols;
let size = 40;
let board = [];
let head;
let food;
function setup() {
  createCanvas(400, 400);
  rows = width / size;
  cols = height / size;

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0;
    }
  }
  head = createVector(int(random(0, rows)), int(random(0, cols)));
  food = createVector(int(random(0, rows)), int(random(0, cols)));
  board[head.x][head.y] = 1;
  board[food.x][food.y] = -1;
}

function draw() {
  background(220);
  displayBoard();
}

function displayBoard() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == 1) {
        fill(0, 220, 0);
      } else if (board[i][j] == -1) {
        fill(220, 0, 0);
      } else {
        fill(255);
      }
      rect(size * i, size * j, size, size);
    }
  }
}

function keyPressed() {
  if (key == "w") {
  } else if (key == "s") {
  } else if (key == "a") {
  } else if (key == "d") {
  }
}
