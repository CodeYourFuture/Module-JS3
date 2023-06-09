function convertToNewRoman(n) {
    const numbers = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
      ];
    const romanNumbers = [
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
      ];
    let result = "";

    for (let i = 0; i < numbers.length; i++) {
        while (n >= numbers[i]) {
            result += romanNumbers[i];
            n -= numbers[i];
        }
    }
    return result;
}

module.exports = convertToNewRoman;
