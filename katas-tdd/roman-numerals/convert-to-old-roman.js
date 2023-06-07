// | Arabic Number | Roman Numeral |
// | ------------- | ------------- |
// | 1             | I             |
// | 5             | V             |
// | 10            | X             |
// | 50            | L             |
// | 100           | C             |
// | 500           | D             |
// | 1000          | M             |

function convertToOldRoman(n) {
    let result = "";
    let left = n;
    while(left > 1000){
        result +="M";
        left -= 1000;
    }
    while(left > 500){
        result +="D";
        left -=500;
    }
    while (left > 100) {
      result += "C";
      left -= 100;
    }
    while (left > 50) {
      result += "L";
      left -= 50;
    }
    while (left > 10) {
      result += "X";
      left -= 10;
    }
    while (left > 5) {
      result += "V";
      left -= 5;
    }
    while (left > 0) {
      result += "I";
      left --;
    }
    return result
}

module.exports = convertToOldRoman;
