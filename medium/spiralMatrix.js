/*
Given an m x n matrix, return all elements of the matrix in spiral order.

ex.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

*/


// figure out a pattern that is true for each layer -> that can be recursed and adjust to the size.

/*
It seems like the path will follow
 - all of the first row, then it stays with the final index and moves through all of the rows,
 - at the last row, it works backward through that whole row until it gets to the first index,
 - then it works back up through the rows at the first index, until the second

 can track these locations, and use the inflection points to change those values

 first get m and x

 m will be matrix.length
 x will be matrix[0].length

 x = 0
y = 0

results = 0
 can do some sort of while loop (base condition tbd)
--


*/
var spiralOrder = function(matrix) {
    let m = matrix.length - 1;
    let x = matrix[0].length - 1;
    let dim = m * x;

    let row = 0;
    let col = 0;
    let ind = true;

    let res = [];

    while(res.length !== matrix.length * matrix[0].length) {
      res.push(matrix[row][col])
      if (col < x && ind) {
        col++;
      } else if (col === x && row < m) {
        row++;
        ind = false;
      } else if (row === m && (col + x !== matrix[0].length - 1)) {
        col--
      } else if ((col + x === matrix[0].length - 1) && (row - 1 + m !== matrix.length - 1)) {
        row--;
      } else {
        m--;
        x--;
        col++;
        ind = true;
      }
    }
    return res;
};


// TESTS

let testOne = [[1,2,3],[4,5,6],[7,8,9]]

console.log(spiralOrder(testOne));

// Output: [1,2,3,6,9,8,7,4,5]

let testTwo = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

console.log(spiralOrder(testTwo));

// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
