/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/*

Strategy-
I want to have a land traversing helper function which can look up down left right to see if there is land.
in order to reduce the # of redundant traversals, we need to switch the current land to a water once it's been tracked.

So I will create a result variable to count land.
iterate over the nested array,
if current element is land, +1 to result and call the searcher function on that land.
at end of loop, return result.

searcher function: (takes coordinates as arguments)
  if current is water, or not on the grid, return
  if current is land, make it water, and call searcher on all four directions out from current location

se

*/

function numIslands(grid: string[][]): number {
  let result: number = 0;

  //searcher fn
  const searcher = (x: number, y: number): void => {
    if (x < 0 || y < 0 || x > grid.length - 1 || y > grid[0].length - 1 || grid[x][y] !== '1') {
      return;
    } else {
      grid[x][y] = '0';
      searcher(x, y + 1);
      searcher(x, y - 1);
      searcher(x + 1, y);
      searcher(x - 1, y);
    }
  }

  //loop
  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result++;
        searcher(i, j);
      }
    }
  }

  return result;
};

// TEST

var testGridOne: string[][]  = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

console.log(numIslands(testGridOne)); // expect 1

var testGridTwo: string[][]  = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(numIslands(testGridTwo));  // expect 3