let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toBe("I");
  expect(convertToOldRoman(3)).toBe("III");
  expect(convertToOldRoman(7)).toBe("VII");
  expect(convertToOldRoman(15)).toBe("XV");
  expect(convertToOldRoman(18)).toBe("XVIII");
  expect(convertToOldRoman(22)).toBe("XXII");
});
