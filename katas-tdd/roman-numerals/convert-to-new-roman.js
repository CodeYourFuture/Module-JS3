
function convertToNewRoman(n) {
  const romanMap = {
    CMXLIV: 944,
    CD: 400,
    XCIX: 99,
    XLIV: 44,
    XIV: 14,
    IX: 9,
    IV: 4,

  };

  let roman = "";

  for (const [numeral, value] of Object.entries(romanMap)) {
    while (n >= value) {
      roman += numeral;
      n -= value;
    }
  }

  return roman;
}


  module.exports = convertToNewRoman;
