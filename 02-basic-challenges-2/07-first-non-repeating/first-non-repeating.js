function findFirstNonRepeatingCharacter(str) {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  }
  return Array.from(charSet)[0] ?? null;
}

// function findFirstNonRepeatingCharacter(str) {
//   const charCount = {};
//   // First pass: count occurrences
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   // Second pass: find first non-repeating
//   for (const char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }

module.exports = findFirstNonRepeatingCharacter;
