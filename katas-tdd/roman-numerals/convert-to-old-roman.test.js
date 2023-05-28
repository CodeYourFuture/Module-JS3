// let convertToOldRoman = require("./convert-to-old-roman");

// test("returns I if passed 1 as an argument", function () {
//   // Arrange
//   // Act
//   // Assert
// });

const assert = require('assert');
const convertToOldRoman = require('./convert-to-old-roman');

describe('Old Roman Numerals Conversion', () => {
  it('should convert 1 to "I"', () => {
    const result = convertToOldRoman(1);
    assert.strictEqual(result, 'I');
  });

describe('Old Roman Numerals Conversion', () => {
  it('should convert 4 to "IIII"', () => {
    const result = convertToOldRoman(4);
    assert.strictEqual(result, 'IIII');
  });

  it('should convert 9 to "VIIII"', () => {
    const result = convertToOldRoman(9);
    assert.strictEqual(result, 'VIIII');
  });

  it('should convert 10 to "X"', () => {
    const result = convertToOldRoman(10);
    assert.strictEqual(result, 'X');
  });

  it('should convert 40 to "XXXX"', () => {
    const result = convertToOldRoman(40);
    assert.strictEqual(result, 'XXXX');
  });

  describe('Old Roman Numerals Conversion', () => {
  it('should convert 50 to “L”’, () => {
    const result = convertToOldRoman(50);
    assert.strictEqual(result, ‘L’);
  });

describe('Old Roman Numerals Conversion', () => {
  it('should convert 90 to “XC”’, () => {
    const result = convertToOldRoman(90);
    assert.strictEqual(result, ‘XC’);
  });

  it('should convert 100 to “C”’, () => {
    const result = convertToOldRoman(100);
    assert.strictEqual(result, ‘C’);
  });

  it('should convert 400 to “CD”’, () => {
    const result = convertToOldRoman(400);
    assert.strictEqual(result, ‘CD’);
  });

  it('should convert 500 to “D”’, () => {
    const result = convertToOldRoman(500);
    assert.strictEqual(result, ‘D’);
  });

it('should convert 900 to “CM”’, () => {
    const result = convertToOldRoman(900);
    assert.strictEqual(result, ‘CM’);
  });

  it('should convert 1000 to “M”’, () => {
    const result = convertToOldRoman(1000);
    assert.strictEqual(result, ‘M’);
  });

});