// function findMissingNumber(arr) {
//   if (arr.length === 0) return 1;
//   const n = arr.length + 1;
//   const sum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((acc, num) => (acc += num), 0);
//   return sum - actualSum;
// }

function findMissingNumber(arr) {
  const n = arr.length + 1;
  // Create a set from the array for O(1) lookups
  const numSet = new Set(arr);
  // Check each number from 1 to n
  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
}

module.exports = findMissingNumber;
