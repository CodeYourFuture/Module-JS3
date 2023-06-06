let convertToNewRoman = require("./convert-to-new-roman");

describe("convertToNewRoman", () => {
  it("should return the correct new Roman numeral for the input number", () => {
    expect(convertToNewRoman(4)).toBe("IV");
    expect(convertToNewRoman(9)).toBe("IX");
    expect(convertToNewRoman(14)).toBe("XIV");
    expect(convertToNewRoman(44)).toBe("XLIV");
    expect(convertToNewRoman(99)).toBe("XCIX");
    expect(convertToNewRoman(400)).toBe("CD");
    expect(convertToNewRoman(944)).toBe("CMXLIV");
  });
});
