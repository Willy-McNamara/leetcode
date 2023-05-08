/*

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

*/

function updateMatrix(mat: number[][]): number[][] {

  const newMat: number[][] = [];

  const explorer = (x, y, step): number => {

      let leastSteps: number = (mat.length * mat[0].length) - 2;

      if (mat[x + 1]) {
          if (mat[x + 1][y] === 0) {
              leastSteps = step;
          } else {
              leastSteps = Math.min(leastSteps, explorer(x + 1, y, step + 1))
          }
      }

      if (mat[x - 1]) {
          if (mat[x - 1][y] === 0) {
              leastSteps = step;
          } else {
              leastSteps = Math.min(leastSteps, explorer(x - 1, y, step + 1))
          }
      }

      if (mat[x][y + 1]) {
          if (mat[x][y + 1] === 0) {
              leastSteps = step;
          } else {
              leastSteps = Math.min(leastSteps, explorer(x, y + 1, step + 1))
          }
      }

      if (mat[x][y - 1]) {
          if (mat[x][y - 1] === 0) {
              leastSteps = step;
          } else {
              leastSteps = Math.min(leastSteps, explorer(x, y - 1, step + 1))
          }
      }

      return leastSteps;
  }

  for (let i = 0; i < mat.length; i++) {
      //
      const row: number[] = [];
      for (let j = 0; j < mat[i].length; j++) {
          let curr: number = mat[i][j];
          if (curr !== 0) {
              row.push(explorer(i, j, 1))
          } else {
              row.push(curr);
          }
      }
      newMat.push(row);
  }

  return newMat;

};

/* loop over matrix,
if non zero, call explorere helper function

base case is finding a zero,
if one of the directions is a zero return an argument that we will pass in as 'steps'

not totally sure how to get around the fact tat i need to return the lowest of each recursive circumstance, and also cant double back on previously checked nodes

*/