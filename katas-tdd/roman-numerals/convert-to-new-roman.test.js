// let convertToNewRoman = require("./convert-to-new-roman");

// test("returns I if passed 1 as an argument", function () {
//   // Arrange
//   // Act
//   // Assert
// });
const convertToNewRoman = require('./convert-to-new-roman');

test('returns I if passed 1 as an argument', () => {
  expect(convertToNewRoman(1)).toEqual('I');
});

test('returns IV if passed 4 as an argument', () => {
  expect(convertToNewRoman(4)).toEqual('IV');
});

test('returns IX if passed 9 as an argument', () => {
  expect(convertToNewRoman(9)).toEqual('IX');
});

test('returns XL if passed 40 as an argument', () => {
  expect(convertToNewRoman(40)).toEqual('XL');
});

test('returns XC if passed 90 as an argument', () => {
  expect(convertToNewRoman(90)).toEqual('XC');
});



