let positiveIntPow = (num, pow) => {
    let result = 1;
    for (let i = 0; i < pow; i++) result *= num;
    return result;
  }

let intDiv = (num1, num2) => {
    return Math.floor(num1 / num2);
}

module.exports = {
    positiveIntPow,
    intDiv
};