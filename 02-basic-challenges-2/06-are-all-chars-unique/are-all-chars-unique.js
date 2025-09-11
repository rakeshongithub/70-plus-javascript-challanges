// function areAllCharactersUnique(str) {
//   const charMap = str.split("").reduce((map, char) => {
//     map[char] = map[char] ? ++map[char] : 1;
//     return map;
//   }, {});

//   return Object.values(charMap).includes(2) ? false : true;
// }

function areAllCharactersUnique(str) {
  const charSet = new Set();

  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

// function areAllCharactersUnique(str) {
//   const charSet = new Set();
//   for (let i = 0; i < str.length; i++) {
//     if (charSet.has(str[i])) {
//       return false;
//     }
//     charSet.add(str[i]);
//   }
//   return true;
// }

module.exports = areAllCharactersUnique;

// // ====================================================
// // 📦 for...in — Loops over keys (property names)
// // Use this when you want to iterate over object keys.
// // ====================================================
// const user = { name: "Rakesh", role: "Developer" };

// for (const key in user) {
//   console.log(key, user[key]);
// }
// // 👉 Output:
// // name Rakesh
// // role Developer
// // ✅ Great for: Objects

// // ====================================================
// // 📦 for...of — Loops over values (iterables)
// // Use this when you want to iterate over arrays, strings, maps, sets, etc.
// // ====================================================
// const fruits = ["🍎", "🍌", "🍇"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }
// // 👉 Output:
// // 🍎
// // 🍌
// // 🍇
// // ✅ Great for: Arrays, strings, maps, sets, NodeLists… basically anything iterable

// // 😎 Pro Tip:
// // for...in → keys
// // for...of → values
