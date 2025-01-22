// Solution 1
function capitalizeLetter1(wholeText) {
  return wholeText.map(
    (currEle) => currEle[0].toUpperCase() + currEle.slice(1)
  );
}

// Solution 2
function capitalizeLetter2(wholeText) {
  return wholeText.map((currEle) =>
    currEle.replace(currEle[0], currEle[0].toUpperCase())
  );
}

function generateHashTag(text) {
  if (text.length === 0 || text.length > 280) {
    return false;
  }
  text = text.split(" ");

  console.log(text.splice(0, 4));

  let formattedText = capitalizeLetter1(text);
  const hasTag = `#${formattedText.join("")}`;
  return hasTag;
}

const stringForHashtag = "aakash soni is a software developer";
console.log(generateHashTag(stringForHashtag));
