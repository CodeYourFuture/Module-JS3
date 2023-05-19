let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToNewRoman(1)).toEqual("I");
});

test("returns IV if passed 4  as an argument", function () {
  expect(convertToNewRoman(4)).toEqual("IV");
});

test("returns IX if passed 9  as an argument", function () {
  expect(convertToNewRoman(9)).toEqual("IX");
});

test("returns XIV if passed 14  as an argument", function () {
  expect(convertToNewRoman(14)).toEqual("XIV");
});

test("returns XLIV if passed 44  as an argument", function () {
  expect(convertToNewRoman(44)).toEqual("XLIV");
});

test("returns XCIX if passed 99  as an argument", function () {
  expect(convertToNewRoman(99)).toEqual("XCIX");
});

test("returns CD if passed 400  as an argument", function () {
  expect(convertToNewRoman(400)).toEqual("CD");
});

test("returns CMXLIV if passed 944  as an argument", function () {
  expect(convertToNewRoman(944)).toEqual("CMXLIV");
});
