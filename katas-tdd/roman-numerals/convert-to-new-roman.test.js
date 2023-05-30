let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  const testCases = [
    { input: 4, expected: "IV" },
    { input: 9, expected: "IX" },
    { input: 14, expected: "XIV" },
    { input: 44, expected: "XLIV" },
    { input: 99, expected: "XCIX" },
    { input: 400, expected: "CD" },
    { input: 944, expected: "CMXLIV" },
  ];
  for (const { input, expected } of testCases) {
    const result = convertToNewRoman(input);
    expect(result).toBe(expected);
  }
});
