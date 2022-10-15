const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw `'arr' parameter must be an instance of the Array!`;
  let mappedArray = [];
  let index = 0;

  let discardedValue = null;
  let performSequenceInteraction = (code) => {
    switch (code) {
      case "--double-next":

        break;
      case "--double-prev":
        break;
      case "--discard-next":
        break;
      case "--discard-prev":
        break;
    }
  }
  
  while (index < arr.length) {
    index++;
  }
}

module.exports = {
  transform
};
