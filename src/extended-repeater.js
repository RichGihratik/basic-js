const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let validateType = (str) => {
    if (typeof str !== "string") return String(str);
    else return str;
  }

  str = validateType(str);
  if (options == undefined) return str;
  
  if (options.addition !== undefined) {
    str = str + (new Array(options.additionRepeatTimes ?? 1))
      .fill(validateType(options.addition))
      .join(options.additionSeparator ?? "|");
  }

  str = (new Array(options.repeatTimes ?? 1))
    .fill(str)
    .join(options.separator ?? "+");
  return str;
}

module.exports = {
  repeater
};
