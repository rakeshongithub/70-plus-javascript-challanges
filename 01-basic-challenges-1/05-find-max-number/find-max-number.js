function findMaxNumber(arr) {
  return Math.max(...arr);
  //   const sortedArr = arr.sort((a, b) => b - a);
  //   return sortedArr[0];
  //   return arr.reduce((acc, curr) => {
  //     if (curr > acc) {
  //       acc = curr;
  //     }
  //     return acc;
  //   }, 0);
}

module.exports = findMaxNumber;
