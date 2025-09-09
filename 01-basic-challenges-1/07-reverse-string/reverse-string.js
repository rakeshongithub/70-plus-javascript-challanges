// function reverseString(str) {
//   return str.split("").reduce((reversed, char) => {
//     reversed = char + reversed;
//     return reversed;
//   }, "");
// }

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

module.exports = reverseString;
