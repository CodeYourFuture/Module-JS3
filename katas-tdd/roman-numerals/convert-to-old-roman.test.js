let convertToOldRoman = require("./convert-to-old-roman");

describe("convertToOldRoman", () => {
  it("should return the correct Roman numeral for the input number", () => {
    expect(convertToOldRoman(1)).toBe("I");
    expect(convertToOldRoman(3)).toBe("III");
    expect(convertToOldRoman(7)).toBe("VII");
    expect(convertToOldRoman(15)).toBe("XV");
    expect(convertToOldRoman(18)).toBe("XVIII");
    expect(convertToOldRoman(22)).toBe("XXII");
    expect(convertToOldRoman(4)).toBe("IIII");
    expect(convertToOldRoman(9)).toBe("VIIII");
    expect(convertToOldRoman(99)).toBe("LXXXXVIIII");
    expect(convertToOldRoman(200)).toBe("CC");
    expect(convertToOldRoman(1234)).toBe("MCCXXXIIII");
    expect(convertToOldRoman(3000)).toBe("MMM");
  });
});
