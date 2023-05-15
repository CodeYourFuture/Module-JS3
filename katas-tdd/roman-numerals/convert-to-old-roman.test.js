let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  let number = 1;
  expect(convertToOldRoman(number)).toEqual("I");
});

test("returns V if passed 5 as an argument", function () {
  let number = 5;
  expect(convertToOldRoman(number)).toEqual("V");
});

test("returns X if passed 10 as an argument", function () {
  let number = 10;
  expect(convertToOldRoman(number)).toEqual("X");
});

test("returns L if passed 50 as an argument", function () {
  let number = 50;
  expect(convertToOldRoman(number)).toEqual("L");
});

test("returns C if passed 100 as an argument", function () {
  let number = 100;
  expect(convertToOldRoman(number)).toEqual("C");
});

test("returns D if passed 500 as an argument", function () {
  let number = 500;
  expect(convertToOldRoman(number)).toEqual("D");
});

test("returns M if passed 1000 as an argument", function () {
  let number = 1000;
  expect(convertToOldRoman(number)).toEqual("M");
});

test("returns IIII if passed 4 as an argument", function () {
  let number = 4;
  expect(convertToOldRoman(number)).toEqual("IIII");
});

test("returns VIII if passed 8 as an argument", function () {
  let number = 8;
  expect(convertToOldRoman(number)).toEqual("VIII");
});

test("returns XXXVI  if passed 36 as an argument", function () {
  let number = 36;
  expect(convertToOldRoman(number)).toEqual("XXXVI");
});

test("returns LXVI  if passed 66 as an argument", function () {
  let number = 66;
  expect(convertToOldRoman(number)).toEqual("LXVI");
});

test("returns CCCCXXXII if passed 432 as an argument", function () {
  let number = 432;
  expect(convertToOldRoman(number)).toEqual("CCCCXXXII");
});

test("returns DCLXXXXVIIII if passed 689 as an argument", function () {
  let number = 689;
  expect(convertToOldRoman(number)).toEqual("DCLXXXVIIII");
});

