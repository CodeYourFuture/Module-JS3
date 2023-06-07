let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  expect(convertToOldRoman(1)).toEqual("I");
});

test("returns VI if passed 6 as an argument", function () {
    expect(convertToOldRoman(6)).toEqual("VI");
});

test("returns MMDVI if passed 2506 as an argument", function () {
  expect(convertToOldRoman(2506)).toEqual("MMDVI");
});