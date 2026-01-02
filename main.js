let rows, cols;
let board = [];
let size = 40;
let head, food;
let dir;
let gameOver = false;
let length = 1;
function setup() {
  createCanvas(400, 400);
  frameRate(5);
  rows = width / size;
  cols = height / size;

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 1;
    }
  }
  head = createVector(int(random(0, rows)), int(random(0, cols)));
  food = createVector(int(random(0, rows)), int(random(0, cols)));
  dir = createVector(0, 0);
}

function draw() {
  background(180);
  update();
  board[food.x][food.y] = 0;
  createBoard();
  if (gameOver == false) {
    board[head.x][head.y] = length + 1;
  }
}

function update() {
  head.add(dir);
  if (head.x > rows - 1 || head.y > cols - 1 || head.x < 0 || head.y < 0) {
    print("game Over!");
    gameOver = true;
    dir.set(0, 0);
  } else {
    removeTail();
  }
}

function removeTail() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j] -= 1;
    }
  }
}

function createBoard() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == 0) {
        fill(255, 255, 255);
      } else if (board[i][j] > 0) {
        fill(0, 255, 0);
      } else if (board[i][j] == -1) {
        fill(140, 0, 0);
      }
      rect(i * size, j * size, size, size);
    }
  }
}

function keyPressed() {
  if (key == "w") {
    dir = createVector(0, -1);
  } else if (key == "a") {
    dir = createVector(-1, 0);
  } else if (key == "s") {
    dir = createVector(0, 1);
  } else if (key == "d") {
    dir = createVector(1, 0);
  }
}
