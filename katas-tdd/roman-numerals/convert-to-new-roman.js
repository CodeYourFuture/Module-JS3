// | Arabic Number | Roman Numeral |
// | ------------- | ------------- |
// | 4             | IV            |
// | 9             | IX            |
// | 14            | XIV           |
// | 44            | XLIV          |  | 50            | L             |
// | 99            | XCIX          |  | 100           | C             |
// | 400           | CD            |  | 500           | D             |
// | 944           | CMXLIV        |
function convertToNewRoman(n) {
  let result = "";
  let left = n;
  while (left > 1000) {
    result += "M";
    left -= 1000;
  }
  if (left >= 900){
    result += "CM";
    left -= 900;
  } else {
  while (left > 500) {
    result += "D";
    left -= 500;
  } }
  if (left >= 400){
    result += "CD";
    left -= 400;
  } else {
    while (left > 100) {
    result += "C";
    left -= 100;
  }
  }
  if (left >= 90) {
    result += "XC";
    left -= 90;
  } else {
    while (left > 50) {
    result += "L";
    left -= 50;
  }
  }
  if (left >= 40){
    result += "XL";
    left -= 40;
  } else {
    while (left > 10) {
    result += "X";
    left -= 10;
  }
  }
  if (left == 9){
    result += "IX";
    left -= 9;
  }
  if (left == 5){
    result += "V";
    left -= 5;
  } 
  if (left == 4){
    result += "IV";
    left -= 4;
  }
while (left > 0) {
    result += "I";
    left--;
  }

  
  return result;
}

module.exports = convertToNewRoman;
