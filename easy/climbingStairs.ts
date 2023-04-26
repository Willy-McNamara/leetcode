/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

STRATEGY:
we can keep a global counter of steps, then create every stepping scenario by recursing
and calling the stepping function for both two and one step so long as there is room left.

To keep track of this, we should pass in the remaining possible steps.
if remaining steps is two, add one to total and call it with one,
if remaining steps is one, add one to total and return

finally return total


*/


function climbStairs(n: number): number {
  let counter: number = 0;

  const stepper = (remainder: number): void => {
    if (remainder === 0) {
      return;
    } else if (remainder === 1) {
      counter++;
      return;
    } else if (remainder === 2) {
      counter++;
      stepper(1);
    } else {
      stepper(remainder - 2);
      stepper(remainder - 1);
    }
  }

  stepper(n);

  return counter;
};

// TESTING

console.log(climbStairs(3), 'expect 3'); // expect 3
console.log(climbStairs(2), 'expect 2'); // expect 2