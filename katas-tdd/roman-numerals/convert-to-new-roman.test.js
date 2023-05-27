// let convertToNewRoman = require("./convert-to-new-roman");

// test("returns I if passed 1 as an argument", function () {
//   // Arrange
//   // Act
//   // Assert
// });


describe("convertToNewRoman", function () {
  test("returns I if passed 1 as an argument", function () {
    // Arrange
    const input = 1;
    const expected = "I";

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns IV if passed 4 as an argument", function () {
    // Arrange
    const input = 4;
    const expected = "IV";

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns V if passed 5 as an argument", function () {
    // Arrange
    const input = 5;
    const expected = “V”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns IX if passed 9 as an argument", function () {
    // Arrange
    const input = 9;
    const expected = "IX";

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns X if passed 10 as an argument", function () {
    // Arrange
    const input = 10;
    const expected = "X";

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns XL if passed 40 as an argument", function () {
    // Arrange
    const input = 40;
    const expected = "XL”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns L if passed 50 as an argument", function () {
    // Arrange
    const input = 50;
    const expected = “L”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns XC if passed 90 as an argument", function () {
    // Arrange
    const input = 90;
    const expected = “XC”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns C if passed 100 as an argument", function () {
    // Arrange
    const input = 100;
    const expected = “C”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

 test("returns CD if passed 400 as an argument", function () {
    // Arrange
    const input = 400;
    const expected = “CD”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns D if passed 500 as an argument", function () {
    // Arrange
    const input = 500;
    const expected = “D”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

 test("returns CM if passed 900 as an argument", function () {
    // Arrange
    const input = 900;
    const expected = “CM”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

  test("returns M if passed 1000 as an argument", function () {
    // Arrange
    const input = 1000;
    const expected = “M”;

    // Act
    const result = convertToNewRoman(input);

    // Assert
    expect(result).toEqual(expected);
  });

});
