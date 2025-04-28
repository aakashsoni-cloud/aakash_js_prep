/**
 * ✅ Problem statement:
 * Given an array ‘arr’ of integers, where ‘arr[i]’ represents the number of pages in the ‘i-th’ book,
 * and an integer ‘m’ representing the number of students.
 *
 * Allocate all books to the ‘m’ students such that:
 * 1. Each student gets at least one book.
 * 2. Each book is allocated to only one student.
 * 3. Book allocation is done in a contiguous manner.
 *
 * The goal is to minimize the maximum number of pages assigned to any single student.
 *
 * If allocation is not possible, return -1.
 *
 * ✅ Example:
 * arr = [12, 34, 67, 90], m = 2
 * The answer is 113 (as explained in the question).
 *
 * ✅ Time complexity:
 * The expected time complexity is O(n * log(s)),
 * where n = number of books, and s = sum of all pages (search space).
 *
 * ✅ Constraints:
 * 2 <= n <= 10^3
 * 1 <= m <= 10^3
 * 1 <= arr[i] <= 10^9
 * The sum of all arr[i] does not exceed 10^9.
 */

function countStudent(arr, pages) {
  let students = 1; // start by allocating books to the first student
  let pageNumbers = 0; // keep track of current sum of pages for the student

  for (let i = 0; i < arr.length; i++) {
    // if adding the current book does not exceed limit
    if (pageNumbers + arr[i] <= pages) {
      pageNumbers += arr[i]; // allocate this book to current student
    } else {
      // allocate the current book to a new student
      students++;
      pageNumbers = arr[i];
    }
  }
  return students;
}

function findPages(arr, n, m) {
  // If more students than books, allocation not possible
  if (m > n) return -1;

  // The lowest possible answer is the largest single book (min search space)
  let low = Math.max(...arr);
  // The highest possible answer is the sum of all pages (max search space)
  let high = arr.reduce((acc, curr) => acc + curr, 0);

  // Binary search on the answer space
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Count how many students are required if each student can read mid pages
    let students = countStudent(arr, mid);

    // If students required are more than available,
    // it means mid pages are too small -> need to increase low
    if (students > m) {
      low = mid + 1;
    } else {
      // Otherwise, we try to minimize further by reducing high
      high = mid - 1;
    }
  }

  // After binary search completes, low will have the minimized max page allocation
  return low;
}

console.log(findPages([12, 34, 67, 90], 4, 2));
