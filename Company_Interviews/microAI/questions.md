## Coding
let num = [[5, 'a'], [0, 'b'], [1, 'c']]

## Time Complexity: O(n) Space Complexity: O(n)
```js
function sortAndJoinInPlace(arr) {
    arr.sort((a, b) => a[0] - b[0]); // In-place sorting (O(n log n))
    return arr.map(item => item[1]).join(""); // Extract and join the characters
}

```

## Time Complexity: (O(n log n)) Space Complexity: O(1) 
```js

function optimizedSortAndJoin(arr) {
    let maxIndex = 0;
    
    // Find the maximum index to define an array size
    for (let i = 0; i < arr.length; i++) {
        maxIndex = Math.max(maxIndex, arr[i][0]);
    }
    
    let sortedArray = new Array(maxIndex + 1);
    
    // Place elements at their respective indices
    for (let i = 0; i < arr.length; i++) {
        sortedArray[arr[i][0]] = arr[i][1];
    }
    
    return sortedArray.join("");
}

``