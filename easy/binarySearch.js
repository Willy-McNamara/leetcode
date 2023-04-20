/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

var search = function(nums, target) {
    let hi = nums.length - 1;
    let lo = 0;
    let mid;

    while (hi >= lo) {
        mid = Math.floor((hi + lo) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
};

// to do a binary search, we need a hi, lo, and mid point which continue to adjust with each step of our search.
// we determine if the target is greater than or less than the current mid point, and we adjust our hi and lo accordingly.
// we check at each step to see if the midpoint is the target, and return it
// we stop looping when hi and lo become the same num


// TEST

let testNumsA = [-1,0,3,5,9,12];
let testTargetA = 9;
console.log('expect ', search(testNumsA, testTargetA), ' to equal 4')

let testNumsB = [-1,0,3,5,9,12];
let testTargetB = 2;
console.log('expect ', search(testNumsB, testTargetB), ' to equal -1')