// function slice(arr, start, end) {
//   return arr.slice(start, end).join("");
// }

// function formatPhoneNumber(numbers) {
//   return `(${slice(numbers, 0, 3)}) ${slice(numbers, 3, 6)}-${slice(
//     numbers,
//     6,
//     10
//   )}`;
// }

function formatPhoneNumber(numbers) {
  const phoneStr = numbers.join("");
  return `(${phoneStr.substring(0, 3)}) ${phoneStr.substring(
    3,
    6
  )}-${phoneStr.substring(6)}`;
}

module.exports = formatPhoneNumber;
