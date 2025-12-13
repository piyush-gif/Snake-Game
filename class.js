class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  addMatrix(matrix2) {
    for (let i = 0; i < matrix2.length; i++) {
      for (let j = 0; j < matrix2[0].length; j++) {
        this.matrix[i][j] += matrix2[i][j];
      }
    }
    return this.matrix;
  }
}

const mat = [
  [1, 2, 3],
  [3, 4, 5],
  [4, 5, 6],
];

const matrix1 = new Matrix(mat);
console.log(matrix1.addMatrix(mat));
