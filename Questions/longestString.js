const findLongestString = (string) => {
  const stringList = string.split(" ");
  let maxLength = 0;
  let maxStringIndex;
  stringList.find((element, index) => {
    if (element.length > maxLength) {
      maxLength = element.length;
      maxStringIndex = index;
    }
  });
  return stringList[maxStringIndex];
};

const longString = "Hello my name is aakash deep soni123 Technical Javascript";
console.log(findLongestString(longString));

// Second Approach

const findLongestString2 = (string) => {
  if (string.trim().length === 0) return false;
  const stringList = string.split(" ");

  stringList.sort((a, b) => b.length - a.length);

  return stringList[0];
};

const longString2 = "Hello my name is aakash deep soni123 Technical Javascript";
console.log(findLongestString2(longString));

// Third Approach
const findLongestString3 = (string) => {
  if (string.trim().length === 0) return false;
  const stringList = string.split(" ");

  const longest = stringList.reduce(
    (acc, curr) => (curr.length > acc.length ? curr : acc),
    ""
  );

  return longest;
};

const longString3 = "Hello my name is aakash deep soni123 Technical Javascript";
console.log(findLongestString3(longString));
