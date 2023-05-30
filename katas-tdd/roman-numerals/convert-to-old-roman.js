function convertToOldRoman(n) {
    const romanMap = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    };

    let roman = '';

    for (let num in romanMap) {
      const value = romanMap[num];
      const count = Math.floor(n / value);

      if (count > 0) {
        roman += num.repeat(count);
        n %= value;
      }
    }

    return roman;
  }







module.exports = convertToOldRoman;


