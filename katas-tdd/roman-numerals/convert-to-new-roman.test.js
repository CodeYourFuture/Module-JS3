/*let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
});

*/


let convertToOldRoman = require("./convert-to-old-roman");
let convertToNewRoman = require("./convert-to-new-roman");

// Test cases for convertToOldRoman
test("converts Arabic number 1 to old Roman numeral", function () {
  // Arrange
  const arabicNumber = 1;
  const expectedRomanNumeral = "I";
  
  // Act
  const result = convertToOldRoman(arabicNumber);
  
  // Assert
  expect(result).toBe(expectedRomanNumeral);
});

// Add more test cases for convertToOldRoman here...

// Test cases for convertToNewRoman
test("converts Arabic number 4 to new Roman numeral", function () {
  // Arrange
  const arabicNumber = 4;
  const expectedRomanNumeral = "IV";
  
  // Act
  const result = convertToNewRoman(arabicNumber);
  
  // Assert
  expect(result).toBe(expectedRomanNumeral);
});

// Add more test cases for convertToNewRoman here...

