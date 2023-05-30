function convertToOldRoman(number) {
  let numbers = [
    { arabic: 1000, roman: "M" },
    { arabic: 500, roman: "D" },
    { arabic: 100, roman: "C" },
    { arabic: 50, roman: "L" },
    { arabic: 10, roman: "X" },
    { arabic: 5, roman: "V" },
    { arabic: 1, roman: "I" },
  ];
  let romanNumeral = "";

  for (const { arabic, roman } of numbers) {
    while (number >= arabic) {
      romanNumeral += roman;
      number -= arabic;
    }
  }

  return romanNumeral;
}
module.exports = convertToOldRoman;
