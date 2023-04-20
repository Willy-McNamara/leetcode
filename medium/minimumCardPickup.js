/*
You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.
*/

var minimumCardPickup = function(cards) {
  // code here
  let result = cards.length + 1;
  let map = new Map();
  // loop over cards, adding new cards to map, and comparing existing cards differences
  for (let i = 0; i < cards.length; i++) {
    let test = map.has(cards[i])
    if (map.has(cards[i])) {
      result = Math.min(result, i - map.get(cards[i]) + 1)
    }
    map.set(cards[i], i);
  }
  return result === cards.length + 1 ? -1 : result;
}

// Planning
/*
We can save every val as a key in a map, with their index as the val.
When we encounter matches, we can compare the val to the current index of our loop.
If the difference is less than whatever is currently our result variable, than we replace it.
if it's a net new val to the map, we place it in.
*/


// TESTING

let cardsTestOne = [3,4,2,3,4,7];
console.log('expect ', minimumCardPickup(cardsTestOne), ' to equal 4')

let cardsTestTwo = [1,0,5,3];
console.log('expect ', minimumCardPickup(cardsTestTwo), ' to equal -1')

let cardsTestThree = [0, 0];
console.log('expect ', minimumCardPickup(cardsTestThree), ' to equal 2')
