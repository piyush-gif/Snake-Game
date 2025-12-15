// array = [1, 2];

// const doubled = array.map((n) => n * 2);
// const filtering = array.filter((n) => n != 1);
// const sum = array.reduce((total, n) => total + n, 0); // nigga question
// const user = array.find((a) => a == 1);
// const hasEven = array.some((n) => n % 2 == 0); // check condition -> returns boolean
// console.log(hasEven);
// console.log(user);
// console.log(doubled);
// console.log(filtering);

const [first, second] = [1, 2, 3];

// console.log(first, second);

const arr = { 1: "name", 2: "birthdate", 3: 3 };
const num1 = [...arr]; // nigga question
console.log(num1);

// const getData = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const Data = getData();
// const filteredData = Data.filter((d) => d.weight > 100).map((d) => d.name);

// const delay = () => {
//   console.log("You'll see the answer after 10 sec");
//   setTimeout(() => {
//     console.log("That's a bitch ass answer!!");
//   }, 1000);
// };
// const answer = delay();
// console.log(answer);

// const world = document.getElementById("world");
// const button = document.getElementById("btn");

// const array = [
//   ["*", "*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*", "*"],
// ];

// button.addEventListener("click", (e) => {
//   world.textContent = array.map((row) => row.join(" ")).join("\n");
// });

// const grid = [
//   ["*", "*", "*"],
//   ["*", "*", "*"],
// ];

// console.log(grid.join("\n"));
// console.log(grid.map((row) => row.join(" ")).join("\n"));

// const nums = [1, 2, 3];
// const doubled = nums.map((n) => n * 2);
// // console.log(doubled);

// nums.forEach((n) => console.log(n * 2));

// grid[0][0] = 1;
// console.log(grid.map((row) => row.join(" ")).join("\n"));

// // random

// const i = Math.floor(Math.random() * 5);
// console.log(i);

// const roll = document.getElementById("roll");
// const dice = document.getElementById("rollno");

// roll.addEventListener("click", () => {
//   dice.textContent = Math.floor(Math.random() * 6) + 1;
//   if (dice.textContent === "2") {
//     console.log("winner");
//   }
// });

// const obj1 = { name: "piyush", age: "25" };

// localStorage.setItem("user info", JSON.stringify(obj1));
// const saved = JSON.parse(localStorage.getItem("user info"));
// console.log(saved.name);

const matrix = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
matrix[0][0] = "*";

const matrix1 = document.getElementById("matrix");

const render = (count) => {
  matrix1.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const box = document.createElement("div");
    box.textContent = i;
    box.className = "cell";
    matrix1.append(box);
  }
};

render(10);
