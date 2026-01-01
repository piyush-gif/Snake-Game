let rows;
let cols;
let size = 40;
let board = [];
let head;
let food;
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
      board[i][j] = 0;
    }
  }
  head = createVector(int(random(0, rows)), int(random(0, cols)));
  food = createVector(int(random(0, rows)), int(random(0, cols)));
  dir = createVector(0, 0);
}

function draw() {
  background(220);
  update();
  board[food.x][food.y] = -1;
  displayBoard();

  if (gameOver == false) {
    board[head.x][head.y] = length;
  }
}

function update() {
  head.add(dir);
  if (dist(head.x, head.y, food.x, food.y) == 0) {
    generateFood();
    length += 1;
  }
  if (head.x < 0 || head.x > cols - 1 || head.y < 0 || head.y > rows - 1) {
    gameOver = true;
    print("GAME OVER");
    dir.set(0, 0);
  } else if (board[head.x][head.y] > 1) {
    gameOver = true;
    print("GAME OVER");
    dir.set(0, 0);
  } else {
    board[head.x][head.y] = 1 + length;
    removeTail();
  }
}
function generateFood() {
  while (true) {
    food = createVector(int(random(0, rows)), int(random(0, cols)));
    if (board[food.x][food.y] == 0) {
      break;
    }
  }
}
function removeTail() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] > 0) {
        board[i][j] -= 1;
      }
    }
  }
}

function displayBoard() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] > 0) {
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
    dir = createVector(0, -1);
  } else if (key == "s") {
    dir = createVector(0, 1);
  } else if (key == "a") {
    dir = createVector(-1, 0);
  } else if (key == "d") {
    dir = createVector(1, 0);
  }
}
