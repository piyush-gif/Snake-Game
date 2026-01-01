// class Matrix {
//   constructor(matrix) {
//     this.matrix = matrix;
//   }

//   addMatrix(matrix2) {
//     for (let i = 0; i < matrix2.length; i++) {
//       for (let j = 0; j < matrix2[0].length; j++) {
//         this.matrix[i][j] += matrix2[i][j];
//       }
//     }
//     return this.matrix;
//   }
// }

// const mat = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [4, 5, 6],
// ];

// const matrix1 = new Matrix(mat);
// console.log(matrix1.addMatrix(mat));
// let a = [
//   [1, 1, 1],
//   [1, 2, 3],
//   [2, 3, 4],
// ];

// for (let i = 0; i < 3; i++) {
//   for (j = 0; j < 3; j++) {
//     index = a[i][j];
//     count = 0;
//     for (k = 0; k < 3; k++) {
//       if (index == a[j][k]) {
//         count++;
//       }
//     }
//     if (count == 3) {
//       console.log("done!");
//     }
//   }
// }

// for (let i = a.length; i >= 0; i--) {
//   console.log(i);
// }
arr = [1, 3, 5, 6, 7, 8, 11];
target = 11;
left = 0;
right = arr.length - 1;

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  if (arr[mid] == target) {
    console.log(true);
    break;
  } else if (arr[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}
