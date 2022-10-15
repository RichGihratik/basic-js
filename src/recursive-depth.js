const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  currentDepth = 1;
  maxDepth = 1;
  
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.currentDepth++;
        this.calculateDepth(arr[i]);
      }
    }

    if (this.currentDepth > this.maxDepth) this.maxDepth = this.currentDepth;
    let result = this.maxDepth;
    if (--this.currentDepth === 0) {
      this.currentDepth = 1;
      this.maxDepth = 1;
    };
    return result;
  }
}

module.exports = {
  DepthCalculator
};
