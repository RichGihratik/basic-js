const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultMap = {};

  for (let domain of domains) {
    let subDomains = domain.split(".").reverse();
    let tmp = "";
    for (let subDomain of subDomains) {
      tmp += "." + subDomain;
      if (resultMap[tmp] === undefined) resultMap[tmp] = 1;
      else resultMap[tmp]++;
    }
  }
  return resultMap;
}

module.exports = {
  getDNSStats
};
