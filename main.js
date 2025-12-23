let rows;
let cols;
let size = 40;
let board = [];
let food;
let head;
let dir;
let gameOver;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  rows = width / size;
  cols = height / size;
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0;
    }
  }
  food = createVector(int(random(0, rows)), int(random(0, cols)));
  head = createVector(int(random(0, rows)), int(random(0, cols)));
  board[food.x][food.y] = -1;
  board[head.x][head.y] = 1;
  dir = createVector(0, 0);
  gameOver = false;
}

function draw() {
  background(210);
  board[head.x][head.y] = 1;
  board[food.x][food.y] = -1;
  if (head.x < 0 || head.x > rows - 1 || head.y < 0 || head.y > cols - 1) {
    console.log("game over");
    gameOver = true;
    return;
  } else {
    createBoard();
  }
}

function createBoard() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == -1) {
        fill(255, 0, 0);
      } else if (board[i][j] >= 1) {
        fill(0, 255, 0);
      } else if (board[food.x][food.y] == board[head.x][head.y]) {
        food = createVector(int(random(0, rows)), int(random(0, cols)));
      } else if (board[food.x][food.y] == board[head.x][head.y]) {
        food = createVector(int(random(0, rows)), int(random(0, cols)));
      } else {
        fill(255);
      }
      rect(i * size, j * size, size, size);
    }
  }
}
function addTail() {}

function keyPressed() {
  if (key == "a") {
    board[head.x][head.y] = 0;
    head = createVector(head.x - 1, head.y);
  } else if (key == "w") {
    board[head.x][head.y] = 0;
    head = createVector(head.x, head.y - 1);
  } else if (key == "s") {
    board[head.x][head.y] = 0;
    head = createVector(head.x, head.y + 1);
  } else if (key == "d") {
    board[head.x][head.y] = 0;
    head = createVector(head.x + 1, head.y);
  }
}
