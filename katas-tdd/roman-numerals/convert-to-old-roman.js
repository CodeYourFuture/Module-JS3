function convertToOldRoman(n) {
    const romanToInteger = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    };
  
    let roman = ''
  
    for (let i in romanToInteger) {
      while (n >= romanToInteger[i]) {
        roman += i;
        n -= romanToInteger[i];
      }
    }
    return roman;
  }
  
  module.exports = convertToOldRoman;