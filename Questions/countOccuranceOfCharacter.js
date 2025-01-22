// Approach One

function countChar(text, char) {
  if (text.length === 0) return false;
  text = text.toLowerCase();
  const countOccurrence = text.split("").reduce((acc, curr) => {
    if (curr === char.toLowerCase()) {
      acc+=1;
    }
    return acc;
  }, 0);

  return countOccurrence;
}

console.log(countChar("MissIssippi", "I"));
