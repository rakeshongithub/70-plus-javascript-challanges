const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (VOWELS.includes(char)) {
        acc += 1;
      }
      return acc;
    }, 0);
}

module.exports = countVowels;
