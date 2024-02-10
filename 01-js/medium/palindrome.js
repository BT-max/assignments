/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z]/g, "").toLowerCase();
  for (let index = 0; index < Math.floor(cleanedStr.length / 2); index++) {
    if (
      cleanedStr.charAt(index).toLowerCase() !==
      cleanedStr.charAt(cleanedStr.length - index - 1).toLowerCase()
    )
      return false;
  }
  return true;
}

module.exports = isPalindrome;
