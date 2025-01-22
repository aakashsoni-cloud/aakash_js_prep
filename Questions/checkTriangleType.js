// Find the type of triangle
// Equilateral -> all three side are equal length
// Isosceles -> two side are equal length
// Scalene -> all sides are of different length

function checkTriangleType(len, wid, hei) {
  if (len === wid && wid === hei) {
    return "Equilateral";
  } else if (len === wid || wid === hei || len === hei) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(4, 3, 2));
