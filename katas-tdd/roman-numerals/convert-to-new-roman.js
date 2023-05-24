/*function convertToNewRoman(n) {}

module.exports = convertToNewRoman;*/

function convertToNewRoman(n) {
  // Mapping of Arabic numbers to Roman numerals
  const numerals = [
    { arabic: 1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic: 90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' }
  ];

  let result = '';
  let remaining = n;

  // Convert Arabic number to Roman numerals
  numerals.forEach(({ arabic, roman }) => {
    while (remaining >= arabic) {
      result += roman;
      remaining -= arabic;
    }
  });

  return result;
}

module.exports = convertToNewRoman;

