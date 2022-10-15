const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length || isNaN(date)) throw new Error("Invalid date!");
  const seasonArray = ['winter', 'spring', 'summer', 'autumn'];
  let index = date.getMonth() - 1;
  return seasonArray[Math.floor(((date.getMonth() + 1) % 12) / 3)];
}

module.exports = {
  getSeason
};
