function convertColumn(n, base, oneUp, twoUp) {
  let romanColumn = "";
  if (n < 4) {
    romanColumn = base.repeat(n);
  }

  if (n === 4) {
    romanColumn = base + oneUp;
  }

  if (n === 5) {
    romanColumn = oneUp;
  }

  if (n > 5 && n < 9) {
    romanColumn = oneUp + base.repeat(n - 5);
  }

  if (n === 9) {
    romanColumn = base + twoUp;
  }
  return romanColumn;
}

function convertToNewRoman(n) {
  let romanResult = 0;
  let romanUnits = "";
  let romanTens = "";
  let romanHundreds = "";
  let romanThousands = "";
  let nString = n.toString();
  if (nString.length >= 1) {
    let nUnitsChar = nString[nString.length - 1];
    romanUnits = convertColumn(parseInt(nUnitsChar), "I", "V", "X");
  }
  if (nString.length >= 2) {
    let nTensChar = nString[nString.length - 2];
    romanTens = convertColumn(parseInt(nTensChar), "X", "L", "C");
  }
  if (nString.length >= 3) {
    let nHundredsChar = nString[nString.length - 3];
    romanHundreds = convertColumn(parseInt(nHundredsChar), "C", "D", "M");
  }
  if (nString.length >= 4) {
    let nThousandsChar = nString[nString.length - 4];
    romanThousands = convertColumn(parseInt(nThousandsChar), "M", "V", "X");
  }

  romanResult = romanThousands + romanHundreds + romanTens + romanUnits;
  return romanResult;
}

module.exports = convertToNewRoman;
