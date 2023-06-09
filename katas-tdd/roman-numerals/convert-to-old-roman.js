function convertToOldRoman(n) {
  const thousands = Math.floor(n / 1000);

  const fiveHundredsRaw = n % 1000;
  const fiveHundreds = Math.floor(fiveHundredsRaw / 500);

  const hundredsRaw = n % 500;
  const hundreds = Math.floor(hundredsRaw / 100);

  const fiftiesRaw = n % 100;
  const fifties = Math.floor(fiftiesRaw / 50);

  const tensRaw = n % 50;
  const tens = Math.floor(tensRaw / 10);

  const units = n % 10;

  const romanThousands = "M".repeat(thousands);
  const romanFiveHundreds = "D".repeat(fiveHundreds);
  const romanHundreds = "C".repeat(hundreds);
  const romanFifties = "L".repeat(fifties);
  const romanTens = "X".repeat(tens);
  const romanUnits = "I".repeat(units);

  return (
    romanThousands +
    romanFiveHundreds +
    romanHundreds +
    romanFifties +
    romanTens +
    romanUnits
  );
}

module.exports = convertToOldRoman;
