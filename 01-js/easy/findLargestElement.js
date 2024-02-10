/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
  return numbers.reduce((accumulator, number) => {
    return accumulator > number ? accumulator : number;
  }, -Infinity);
}

module.exports = findLargestElement;
