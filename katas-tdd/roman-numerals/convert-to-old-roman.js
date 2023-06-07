/*function convertToOldRoman(n) {}

module.exports = convertToOldRoman;*/

function convertToOldRoman(n) {
  const numerals = [
    { arabic: 1000, roman: 'M' },
    { arabic: 500, roman: 'D' },
    { arabic: 100, roman: 'C' },
    { arabic: 50, roman: 'L' },
    { arabic: 10, roman: 'X' },
    { arabic: 5, roman: 'V' },
    { arabic: 1, roman: 'I' }
  ];

  let result = '';
  let remaining = n;

  numerals.forEach(({ arabic, roman }) => {
    while (remaining >= arabic) {
      result += roman;
      remaining -= arabic;
    }
  });

  return result;
}

module.exports = convertToOldRoman;

