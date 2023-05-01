/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/
function threeSum(nums: number[]): number[][] {
  // create holders
  let result: number[][] = [];
  let solTracker: Map<string, boolean> = new Map;

  // sort nums to help check dupes
  nums.sort((a, b) => {return a - b});

  //local trackers
  let iTracker: Map<number, boolean> = new Map()
  // first loop
  for (let i: number = 0; i < nums.length; i++) {
      if (iTracker.has(i)) {
          continue;
      } else {
          iTracker.set(i, true);
      }
      // second loop
      let jTracker: Map<number, boolean> = new Map()
      for (let j: number = i + 1; j < nums.length; j++) {
          if (jTracker.has(j)) {
              continue;
          } else {
              jTracker.set(j, true);
          }
          //third loop
          let kTracker: Map<number, boolean> = new Map()
          for (let k: number = j + 1; k < nums.length; k++) {
              if (kTracker.has(k)) {
                  continue;
              } else {
                  kTracker.set(k, true);
              }
              // logic for checking sols
              let stringifiedSol: string = nums[i].toString() + nums[j].toString() + nums[k].toString();
              if (nums[i] + nums[j] + nums[k] === 0 && !solTracker.has(stringifiedSol)) {
                  solTracker.set(stringifiedSol, true);
                  result.push([nums[i], nums[j], nums[k]]);
              }
          }
      }
  }
  return result;
};
