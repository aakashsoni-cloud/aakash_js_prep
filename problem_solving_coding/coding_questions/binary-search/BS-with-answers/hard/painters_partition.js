/*
There is fence which consists of 
 wooden blocks with each block having a number written on it represented by an array 
. The painter is also given two numbers 
 and 
 . He is given the task to paint the fence using at most 
 colors. But there are certain conditions which the painter must follow while painting:

He has to paint the fence in sequential manner from left to right i.e, first paint the first block then second block and so on without leaving any block not being painted. 
He will also use colors in sequential manner i.e, first paint with 1st color,then with 2nd color and so on. Note that he can paint any number of blocks sequentially with a single color and a color once used cannot be reused.
The sum of numbers written on blocks painted with same color must lie between 
 and 
 ( both inclusive ).
    The painter wants to know in how many ways can he paint the fence.Since the answer can be large, find the answer modulo 
.

Input Format:

The first line contains three integers , and.
The second line contains an integer array .

Sample Input
5 3 12
3 5 1 2 6
Sample Output
8

Output Format:

Print the answer modulo .
*/
let arr = [3, 5, 1, 2, 6];
let n = 5;
let m = 3;

function countPainter(arr, mid) {
    let painter = 1;
    let boardPainter = 0;
    
    for(let i=0;i<arr.length;i++) {
        if(boardPainter + arr[i] <= mid ) {
            boardPainter += arr[i];
        } else {
            painter++;
            boardPainter = arr[i];
        }
    }
    return painter;
}
function paintersPartition(arr, m) {
  // Write your code here
  let low = Math.max(...arr);
  let high = arr.reduce((acc, curr) => acc+curr, 0);

  while(low<=high) {
    let mid = Math.floor((low+high)/2);

    let painter = countPainter(arr, mid);

    if(painter > m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}