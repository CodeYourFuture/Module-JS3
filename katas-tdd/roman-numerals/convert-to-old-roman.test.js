let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toBe("I");
  expect(convertToOldRoman(5)).toBe('V');
  expect(convertToOldRoman(15)).toBe('XV');

});
