//In one step, you can take one card from the beginning or from the end of the row.
// You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k,
// return the maximum score you can obtain.

/*

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, 
choosing the rightmost card first will maximize your total score. 
The optimal strategy is to take the three cards on the right, 
giving a final score of 1 + 6 + 5 = 12.


*/

function maxCards(cards) {
  let k = 3;
  let lsum = 0;
  let rsum = 0;
  let maxLength = 0;

  let l = k - 1;
  let r = cards.length - 1;

  for (let i = 0; i < k; i++) {
    lsum += cards[i];
  }

  maxLength = lsum;

  while (l >= 0) {
    lsum -= cards[l];
    rsum += cards[r];
    l--;
    r--;

    maxLength = Math.max(maxLength, lsum + rsum);
  }

  return maxLength;
}

let cards = [1, 2, 3, 4, 5, 6, 1];

console.log(maxCards(cards));
