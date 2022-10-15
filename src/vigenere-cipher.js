const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  isReversed = false;
  constructor() {
    if (arguments[0] === false) this.isReversed = true;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error("Incorrect arguments!");

    str = str.toUpperCase();
    key = key.toUpperCase();

    let iterator = 0;
    let getShiftValue = () => alphabet.indexOf(key[iterator++ % key.length]);
    let result = str.replace(/[a-z]/gi, (char) => {
      let position = alphabet.indexOf(char);
      return alphabet[(position + getShiftValue()) % alphabet.length];
    })
    return this.isReversed ? result.split("").reverse().join(""): result;
  }

  decrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') throw new Error("Incorrect arguments!");

    str = str.toUpperCase();
    key = key.toUpperCase();

    let iterator = 0;
    let getShiftValue = () => alphabet.indexOf(key[iterator++ % key.length]);

    let result = str.replace(/[a-z]/gi, (char) => {
      let position = alphabet.indexOf(char) - getShiftValue();
      return alphabet[position >= 0 ? position: alphabet.length + position];
    });
    return this.isReversed ? result.split("").reverse().join(""): result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
