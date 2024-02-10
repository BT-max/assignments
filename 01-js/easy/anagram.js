/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const isAnagram = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  if (str1.length !== str2.length) return false;
  const charCounts = new Map();
  for (let char of str1.toLowerCase()) {
    const count = charCounts.get(char) || 0;
    charCounts.set(char, count + 1);
  }
  for (let char of str2.toLowerCase()) {
    const count = charCounts.get(char);
    if (count === undefined || count <= 0) return false;
    charCounts.set(char, count - 1);
  }
  return true;
};

module.exports = isAnagram;
