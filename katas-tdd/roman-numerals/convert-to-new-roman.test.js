
let convertToNewRoman = require('./convert-to-new-roman');

test("returns the correct Roman numeral for the given number", function () {
  expect(convertToNewRoman(4)).toBe('IV');
  expect(convertToNewRoman(9)).toBe('IX');
  expect(convertToNewRoman(14)).toBe('XIV');
  expect(convertToNewRoman(44)).toBe('XLIV');
  expect(convertToNewRoman(99)).toBe('XCIX');
  expect(convertToNewRoman(400)).toBe('CD');
  expect(convertToNewRoman(944)).toBe('CMXLIV');

});
