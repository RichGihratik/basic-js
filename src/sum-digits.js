const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 0;

  let intDiv = (num1, num2) => {
    return Math.floor(num1 / num2);
  }

  while(n !== 0) {
    result += n % 10;
    n = intDiv(n, 10);
  }

  if (intDiv(result, 10) > 0) result = getSumOfDigits(result);
  return result;
}

module.exports = {
  getSumOfDigits
};
