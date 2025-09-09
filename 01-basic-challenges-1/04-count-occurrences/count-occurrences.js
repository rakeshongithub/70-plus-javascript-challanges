function countOccurrences(str, char) {
  return str
    .toLowerCase()
    .split("")
    .reduce((count, currChar) => {
      if (currChar === char.toLowerCase()) {
        count++;
      }
      return count;
    }, 0);
}

// function countOccurrences(str, char) {
//   return str.split(char).length - 1;
// }

module.exports = countOccurrences;
