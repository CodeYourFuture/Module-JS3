// let convertToNewRoman = require("./convert-to-new-roman");

// test("returns I if passed 1 as an argument", function () {
//   // Arrange
//   // Act
//   // Assert
// });
const convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const number = 1;
  const expected = "I";

  // Act
  const result = convertToNewRoman(number);

  // Assert
  expect(result).toEqual(expected);
});
