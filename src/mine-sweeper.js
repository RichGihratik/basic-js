const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = [];

  let offsetArray = [
    [-1, -1], 
    [ 0, -1],
    [ 1, -1],
    [ 1,  0],
    [ 1,  1],
    [ 0,  1],
    [-1,  1],
    [-1,  0]
  ]

  for (let y = 0; y < matrix.length; y++) {
    newMatrix.push([]);
    for (let x = 0; x < matrix[y].length; x++) {
      let count = 0;

      let offsetCheck = (xOffset, yOffset) => {
        if (x + xOffset < 0 || x + xOffset >= matrix[y].length) return false;
        if (y + yOffset < 0 || y + yOffset >= matrix.length) return false;
    
        return matrix[y + yOffset][x + xOffset];
      }
      offsetArray.forEach((item) => count += offsetCheck(item[0], item[1]));
      newMatrix[y].push(count);
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
