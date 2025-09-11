// function displayLikes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   }

//   if (names.length >= 2) {
//     const firstTwo = names.slice(0, 2);
//     const thirdName = names.slice(2, 3);
//     const remainNames = names.slice(2);

//     if (names.length === 2) {
//       return `${names[0]} and ${names[1]} like this`;
//     }

//     if (names.length === 3) {
//       return `${firstTwo.join(", ")} and ${thirdName} like this`;
//     }

//     return `${firstTwo.join(", ")} and ${remainNames.length} others like this`;
//   }
//   return `${names[0]} likes this`;
// }

// function displayLikes(names) {
//   const count = names.length;
//   switch (count) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${names[0]} likes this`;

//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
//   }
// }

function displayLikes(names) {
  const count = names.length;
  if (count === 0) return "no one likes this";
  if (count === 1) return `${names[0]} likes this`;
  if (count === 2) return `${names[0]} and ${names[1]} like this`;
  if (count === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names.slice(0, 2).join(", ")} and ${count - 2} others like this`;
}

module.exports = displayLikes;
