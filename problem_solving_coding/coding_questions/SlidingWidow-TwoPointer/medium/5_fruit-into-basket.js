/*

You only have two baskets, and each basket can only hold a single type of fruit. 
There is no limit on the amount of fruit each basket can hold.

Starting from any tree of your choice, you must pick exactly one fruit from every tree 
(including the start tree) while moving to the right. 
The picked fruits must fit in one of your baskets.

Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.


Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

*/

function fruitInBasket(fruits) {
  let l = 0;
  let r = 0;

  let maxLength = 0;
  let basket = new Map();

  while (r < fruits.length) {
    basket.set(fruits[r], (basket.get(fruits[r]) || 0) + 1);

    if (basket.size > 2) {
      basket.set(fruits[l], basket.get(fruits[l]) - 1);
      if (basket.get(fruits[l]) === 0) {
        basket.delete(fruits[l]);
      }
      l++;
    }
    if (basket.size <= 2) {
      maxLength = Math.max(maxLength, r - l + 1);
    }
    r++;
  }
  return maxLength;
}

let fruits = [1, 2, 3, 2, 2];
console.log(fruitInBasket(fruits));
