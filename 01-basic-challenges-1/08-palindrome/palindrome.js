function cleanedStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

function isPalindrome(str) {
  return cleanedStr(str) === cleanedStr(str).split("").reverse().join("");
}

module.exports = isPalindrome;
