let rows;
let cols;
let size = 50;
let board = [];
let food;
let head;
function setup() {
  createCanvas(400, 400);
  background(220);
  rows = floor(width / size);
  cols = floor(width / size);

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0;
    }
  }
  food = createVector(
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8)
  );
  head = createVector(
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8)
  );

  board[food.x][food.y] = -1;
  board[head.x][head.y] = 1;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == 0) {
        fill(255);
      } else if (board[i][j] == -1) {
        fill(255, 0, 0);
      } else if (board[i][j] == 1) {
        fill(0, 255, 0);
      }
      rect(i * size, j * size, size, size);
    }
  }
}

function keyPressed() {
  if (key == "w") {
    board.y -= 1;
  } else if (key == "a") {
  } else if (key == "s") {
  } else if (key == "d") {
  }
}
