/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


*/

function containsDuplicate(nums: number[]): boolean {
  const trackingMap = new Map<number, number>();

  // loop over the input, storing elements in an object.
  for (let i = 0; i < nums.length; i++) {
      if (trackingMap.has(nums[i])) {
          return true;
      } else {
          trackingMap.set(nums[i], nums[i]);
      }
  }
  return false;