// let convertToOldRoman = require("./convert-to-old-roman");

// test("returns I if passed 1 as an argument", function () {
//   // Arrange
//   // Act
//   // Assert
// });


const convertToOldRoman = require('./convert-to-old-roman');

test('returns I if passed 1 as an argument', () => {
  expect(convertToOldRoman(1)).toEqual('I');
});

test('returns IV if passed 4 as an argument', () => {
  expect(convertToOldRoman(4)).toEqual('IV');
});

test('returns IX if passed 9 as an argument', () => {
  expect(convertToOldRoman(9)).toEqual('IX');
});

test('returns XL if passed 40 as an argument', () => {
  expect(convertToOldRoman(40)).toEqual('XL');
});

test('returns XC if passed 90 as an argument', () => {
  expect(convertToOldRoman(90)).toEqual('XC');
});





