function convertToNewRoman(number) {
  const romanLookup = [
    { arabic: 1000, roman: "M" },
    { arabic: 900, roman: "CM" },
    { arabic: 500, roman: "D" },
    { arabic: 400, roman: "CD" },
    { arabic: 100, roman: "C" },
    { arabic: 90, roman: "XC" },
    { arabic: 50, roman: "L" },
    { arabic: 40, roman: "XL" },
    { arabic: 10, roman: "X" },
    { arabic: 9, roman: "IX" },
    { arabic: 5, roman: "V" },
    { arabic: 4, roman: "IV" },
    { arabic: 1, roman: "I" },
  ];

  let romanNumeral = "";

  for (const { arabic, roman } of romanLookup) {
    while (number >= arabic) {
      romanNumeral += roman;
      number -= arabic;
    }
  }

  return romanNumeral;
}

module.exports = convertToNewRoman;
