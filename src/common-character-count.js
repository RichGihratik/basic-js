const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let getSymbolsCount = (str) => {
    let map = {};
    for (let char of str) {
      if (map[char] !== undefined) map[char]++;
      else map[char] = 1;
    } 
    return map;
  }

  let count1 = getSymbolsCount(s1);
  let count2 = getSymbolsCount(s2);

  let result = 0;

  for (let [key, value] of Object.entries(count1)) {
    if (count2[key] !== undefined) result += Math.min(count1[key], count2[key]);
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
