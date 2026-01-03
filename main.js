let rows, cols;
let board = [];
let size = 50;
let head, food;
let dir;
let gameOver = false;
let length = 1;
function setup() {
  createCanvas(400, 400);
  frameRate(5);
  rows = height / size;
  cols = width / size;

  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      board[i][j] = 0;
    }
  }
  head = createVector(int(random(0, cols)), int(random(0, rows)));
  food = createVector(int(random(0, cols)), int(random(0, rows)));
  dir = createVector(0, 0);
}

function draw() {
  background(180);
  update();
  createBoard();
  board[food.x][food.y] = -1;
  if (gameOver == true) {
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(50);
    text("Game Over", width / 2, height / 2);
  }
}

function update() {
  head.add(dir);
  if (dist(head.x, head.y, food.x, food.y) == 0) {
    generateFood();
    length++;
  }
  if (head.x < 0 || head.x > cols - 1 || head.y < 0 || head.y > rows - 1) {
    gameOver = true;
    console.log("Game Over: Run Into Border");
  } else if (board[head.x][head.y] > 1) {
    gameOver = true;
    console.log("Game Over: Run Into Itself");
    dir.set(0, 0);
  } else {
    board[head.x][head.y] = 1 + length;
    removeTail();
  }
}

function generateFood() {
  while (true) {
    food = createVector(int(random(0, cols)), int(random(0, rows)));
    if (board[food.x][food.y] == 0) {
      break;
    }
  }
}
function removeTail() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] > 0) {
        board[i][j] -= 1;
      }
    }
  }
}

function createBoard() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] == 0) {
        fill(255);
      } else if (board[i][j] > 0) {
        fill(0, 255, 0);
      } else {
        fill(140, 0, 0);
      }
      rect(i * size, j * size, size, size);
    }
  }
}

function keyPressed() {
  if (key == "a") {
    dir = createVector(-1, 0);
  } else if (key == "d") {
    dir = createVector(1, 0);
  } else if (key == "s") {
    dir = createVector(0, 1);
  } else if (key == "w") {
    dir = createVector(0, -1);
  }
}
