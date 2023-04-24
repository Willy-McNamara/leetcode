/*

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.



Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []

*/

/*
STRATEGY
  Discussion
My first thought is that there may be something fancy i can do with modulo to determine remainder.
Is there some kind of overarching rule to remainders when ombining values that I can use to determine this?

I need to consider all elements that are less than or equal to the target.
Of those elements, I need to try every combination,

What is a good method for trying every combination?

I can subtract from the target with one of the elements, then recurse with each of the remaining elements that are less than or equal to
the difference.
Once the difference that I feed in (or the target?) is zero, push this array to a results array.
Once either the difference or the target is negative, return, closing this recurision with nothing pushed to result.

finally return result.

** important rule for looping,
only consider elements at indexes equal or greater to the last index that was chosen. need this to avoid redundant solutions.
to do this, lest just pass candidates as an argument which will be updated as we go.

*/

function combinationSum(candidates: number[], target: number): number[][] {

  // create a result array to capture proper combinations.
  let result: number[][] = [];

  // create a recursive function which will be given remainder, target, and currSolution
  const comboFinder = (cands: number[], tar: number, currTotal: number, solArr: number[]): void => {
    // logic for recursion
    console.log('logging all arguments to comboFinder in order ;', cands, tar, currTotal, solArr)
    if (target === currTotal) {
      result.push(solArr);
      return
    } else if (currTotal > target) {
      return;
    } else {
      for (let i: number = 0; i < cands.length; i++) {
        // if tar less (currTotal plus curr) is greater than zero, call comboFinder with new arguments reflecting -> push curr to solArr, add it to total
        let curr: number = cands[i];
        let newDiff: number = tar - (curr);
        if (newDiff >= 0) {
          comboFinder(cands.slice(i, cands.length), newDiff, currTotal + curr, [...solArr, curr]);
        } else {
          return;
        }
      }
    }
  }

  comboFinder(candidates.sort(), target, 0, []);

  return result;

};

// TESTING

let candidatesTestOne: number[] = [2,3,6,7], targetTestOne: number = 7
console.log(combinationSum(candidatesTestOne, targetTestOne)); // Expected Output: [[2,2,3],[7]]


let candidatesTestTwo: number[] = [2,3,5], targetTestTwo: number = 8
console.log(combinationSum(candidatesTestTwo, targetTestTwo)); // Expected Output:  [[2,2,2,2],[2,3,3],[3,5]]


let candidatesTestThree: number[] = [2], targetTestThree: number = 1
console.log(combinationSum(candidatesTestThree, targetTestThree)); // Expected Output: []


let candidatesTestFour: number[] = [8,7,4,3], targetTestFour: number = 11
console.log(combinationSum(candidatesTestFour, targetTestFour)); // Expected Output: [[8,3],[7,4],[4,4,3]]


