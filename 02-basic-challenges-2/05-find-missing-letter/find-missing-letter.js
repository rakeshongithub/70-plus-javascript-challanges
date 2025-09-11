function findMissingLetter(arr) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabets.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (alphabets[startIndex + i] !== arr[i]) {
      return alphabets[startIndex + i];
    }
  }

  return "";
}

module.exports = findMissingLetter;
