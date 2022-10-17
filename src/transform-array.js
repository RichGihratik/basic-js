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
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (arr.length === 0) return arr;

  let newArray = [];
  let newArrayIterator = 0;

  let process = (key, value) => {
    let transformedValue = null;
    switch (value) {
      case "--double-next":
        if (key + 1 < arr.length) transformedValue = arr[key + 1];
        break;
      case "--double-prev":
        if (key - 1 >= 0 && newArray[newArrayIterator - 1] != null) transformedValue = arr[key - 1];
        break;
      case "--discard-next":
        if (key + 1 < arr.length) transformedValue = arr[key + 1];
        break;
      case "--discard-prev":
        if (newArrayIterator - 1 >= 0) newArray[newArrayIterator - 1]
        break;
      default:
        transformedValue = arr[key];
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    


  }
  let index = 0;
  while (index < arr.length) {
    index++;
  }
}

module.exports = {
  transform
};
