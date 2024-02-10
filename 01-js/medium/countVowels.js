/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  return str.split("").reduce((accumulator, character) => {
    if (vowels.has(character.toLowerCase())) accumulator += 1;
    return accumulator;
  }, 0);
}

module.exports = countVowels;
