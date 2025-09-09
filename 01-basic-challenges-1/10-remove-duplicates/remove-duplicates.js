function removeDuplicates(arr) {
  //   return [...new Set(arr)];
  return Array.from(new Set(arr));
}

// function removeDuplicates(arr) {
//   return arr.reduce((cleanArr, item) => {
//     if (!cleanArr.includes(item)) {
//       cleanArr.push(item);
//     }
//     return cleanArr;
//   }, []);
// }

// function removeDuplicates(arr) {
//   const cleanedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!cleanedArr.includes(arr[i])) {
//       cleanedArr.push(arr[i]);
//     }
//   }

//   return cleanedArr;
// }

module.exports = removeDuplicates;
