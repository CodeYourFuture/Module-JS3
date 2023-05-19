let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toEqual("I");
});

test("returns IIII if passed 4 as an argument", function () {
  expect(convertToOldRoman(4)).toEqual("IIII");
});

test("returns V if passed 5 as an argument", function () {
  expect(convertToOldRoman(5)).toEqual("V");
});

test("returns VII if passed 7 as an argument", function () {
  expect(convertToOldRoman(7)).toEqual("VII");
});

test("returns X if passed 10 as an argument", function () {
  expect(convertToOldRoman(10)).toEqual("X");
});

test("returns XIIII if passed 14 as an argument", function () {
  expect(convertToOldRoman(14)).toEqual("XIIII");
});

test("returns XVII if passed 14 as an argument", function () {
  expect(convertToOldRoman(42)).toEqual("XXXXII");
});

test("returns L if passed 50 as an argument", function () {
  expect(convertToOldRoman(50)).toEqual("L");
});

test("returns LXIIII if passed 64 as an argument", function () {
  expect(convertToOldRoman(64)).toEqual("LXIIII");
});

test("returns C if passed 100 as an argument", function () {
  expect(convertToOldRoman(100)).toEqual("C");
});

test("returns CLXIII if passed 163 as an argument", function () {
  expect(convertToOldRoman(163)).toEqual("CLXIII");
});

test("returns D if passed 500 as an argument", function () {
  expect(convertToOldRoman(500)).toEqual("D");
});

test("returns DCLXIII if passed 663 as an argument", function () {
  expect(convertToOldRoman(663)).toEqual("DCLXIII");
});

test("returns M if passed 1000 as an argument", function () {
  expect(convertToOldRoman(1000)).toEqual("M");
});

test("returns MDCLXIII if passed 1663 as an argument", function () {
  expect(convertToOldRoman(1663)).toEqual("MDCLXIII");
});
