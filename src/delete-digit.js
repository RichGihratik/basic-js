const { positiveIntPow, intDiv} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNum = String(n);
  let lastDigit = 0;

  for (let i = 1; i < strNum.length; i++) {
    if (strNum[lastDigit] < strNum[i]) break;
    lastDigit = i;
  }

  let digitToExclude = positiveIntPow(10, strNum.length - lastDigit - 1);
  n = intDiv(n, digitToExclude * 10) * digitToExclude + n % digitToExclude;
  return n;
}

module.exports = {
  deleteDigit
};
