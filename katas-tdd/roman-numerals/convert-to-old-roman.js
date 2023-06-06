function convertToOldRoman(number) {
  const romanNumerals = [
    { arabic: 1000, roman: "M" },
    { arabic: 500, roman: "D" },
    { arabic: 100, roman: "C" },
    { arabic: 50, roman: "L" },
    { arabic: 10, roman: "X" },
    { arabic: 5, roman: "V" },
    { arabic: 1, roman: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const currentSymbol = romanNumerals[i];

    while (number >= currentSymbol.arabic) {
      result += currentSymbol.roman;
      number -= currentSymbol.arabic;
    }
  }

  return result;
}

console.log(convertToOldRoman(18));

module.exports = convertToOldRoman;
