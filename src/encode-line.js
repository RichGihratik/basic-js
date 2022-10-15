const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") return "";
  let result = "", lastChar = str[0], counter = 0;
  for (let c of str) {
    if (lastChar === c) counter++;
    else {
      result += counter !== 1 ? String(counter) + lastChar : lastChar;
      lastChar = c;
      counter = 1;
    }
  }
  result += counter !== 1 ? String(counter) + lastChar : lastChar;
  return result;
}

module.exports = {
  encodeLine
};
