/*
https://leetcode.com/problems/spiral-matrix/description/

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]
*/
//PLANNING
/*

Need to sort in place, so need to be swapping figures.
could potentiall go through and count all the red, white, and blue, and then replace the indexes accordingly?

*/

var sortColors = function(nums) {
  let red = 0;
  let white = 0;
  let blue = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
        red++
    } else if (nums[i] === 1) {
        white++
    } else if (nums[i] === 2) {
        blue++
    }
}

for (let i = 0; i < nums.length; i++) {
    if (red !== 0) {
        nums[i] = 0;
        red--;
    } else if (white !== 0) {
        nums[i] = 1;
        white--;
    } else if (blue !== 0) {
        nums[i] = 2;
        blue--;
    }
}

return nums;
};

// TEST

let testNumsOne = [2,0,2,1,1,0];
console.log(sortColors(testNumsOne)); // expect [0,0,1,1,2,2]


let testNumsTwo = [2,0,1];
console.log(sortColors(testNumsTwo)); // expect [0,1,2]



