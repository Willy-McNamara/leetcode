/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

 Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


 ========= STRATEGY =========

 perhaps there is some nifty math trick i dont know, so im just going to create the number from the first list, create the number from the second list,
sum them
build my solution ll and return it

when creating the lists, im going to use a function that visits each node and pushes the value to an array argument.
then use reverse method to flip array
then join the array, then turn it into a number.

do the math,

stringify the number, split it into an array, reverse the array
iterate over this array taking each digit and placeing it into a linked list
perhaps do that with a function as well.

*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {

  // define a function to reduce vals from linkedList into an array
  const listReducer = (node: ListNode, arrayOfDigits: number[]): number[] => {
      arrayOfDigits.push(node.val);
      if (node.next) {
          return listReducer(node.next, arrayOfDigits)
      } else {
          return arrayOfDigits;
      }
  }

  // use reducer function to create arrayOfNums for both lists
  let arrOne: number[] = listReducer(l1, []);
  let arrTwo: number[] = listReducer(l2, []);

  //console.log('arrOne :', arrOne, 'arrTwo', arrTwo);

  // reformate lists to the proper type and orientation
  let numOne: number = Number(arrOne.reverse().join(''));
  let numTwo: number = Number(arrTwo.reverse().join(''));

  console.log('numOne :', numOne, 'numTwo', numTwo, 'sum', numOne + numTwo);

  // sum the lists, then reformat as an array to be used in building the solution linkedList
  let solArr: string[]= (numOne + numTwo).toString().split('');

  //console.log('solArr', solArr);

  // define a function to build the solution linkedList from the formatted list sum
  const listBuilder = (node: ListNode, sourceArr: string[]): void => {
      node.val = Number(sourceArr.pop());
      if (sourceArr.length === 0) {return}
      let newNode = new ListNode();
      node.next = newNode;
      listBuilder(node.next, sourceArr);
  }

  // define the starting node of our solution LL
  let solutionNode = new ListNode();

  // use function to construct solution
  listBuilder(solutionNode, solArr);

  // return solution
  return solutionNode;
};

// TESTING
/*
let nodeOne: ListNode = new ListNode(2);
let nodeTwo: ListNode = new ListNode(4);
let nodeThree: ListNode = new ListNode(3);
let nodeSeven: ListNode = new ListNode(4);
let nodeEight: ListNode = new ListNode(3);
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeSeven;
nodeSeven.next = nodeEight;

let nodeFour: ListNode = new ListNode(5);
let nodeFive: ListNode = new ListNode(6);
let nodeSix: ListNode = new ListNode(4);
nodeFour.next = nodeFive;
nodeFive.next = nodeSix;

let n1: ListNode = new ListNode(1);
let n2: ListNode = new ListNode(0);
let n3: ListNode = new ListNode(0);
let n4: ListNode = new ListNode(0);
let n5: ListNode = new ListNode(0);
let n6: ListNode = new ListNode(0);
let n7: ListNode = new ListNode(1);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

// let n10: ListNode = new ListNode(9);

console.log(addTwoNumbers(n1, nodeFour)) // expected output [7,0,8], Explanation: 342 + 465 = 807
*/
