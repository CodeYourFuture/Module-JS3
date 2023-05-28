// let convertToOldRoman = require("./convert-to-old-roman");

// test("returns I if passed 1 as an argument", function () {
//   // Arrange
//   // Act
//   // Assert
// });


const convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const number = 1;
  const expected = "I";

  // Act
  const result = convertToOldRoman(number);

  // Assert
  expect(result).toEqual(expected);
});
