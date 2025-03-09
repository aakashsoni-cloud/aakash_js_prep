## Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### let interval = [[1,3],
                    [2,6],
                    [8,10],
                    [15,18],
                    [16,20]]; 
### let output = [[1,6],[8,10],[15,20]] 


if arr[i][j] <= a[i+1][0] && arr[i+1][0] >= arr[i][m-1] 
  merging(arr[i], arr[i+1])
else 
  continue;





## Given an integer array nums, rotate the array to the right by k steps, where k is non-negative