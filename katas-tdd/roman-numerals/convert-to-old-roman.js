// function convertToOldRoman(n) {}

// module.exports = convertToOldRoman;
// // Import the 'assert' module for test assertions
// const assert = require('assert');

// Function to convert Arabic numbers to old Roman Numerals
function convertToOldRoman(number) {
const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

let result = '';

for (let numeral in romanNumerals) {
    while (number >= romanNumerals[numeral]) {
result += numeral;
number -= romanNumerals[numeral];
    }
}

return result;
}


