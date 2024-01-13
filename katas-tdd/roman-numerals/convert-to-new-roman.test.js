let convertToNewRoman = require("./convert-to-new-roman");

test("returns II if passed 2 as an argument", function () {
  let arabic = 2;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("II");
});

test("returns IV if passed 4 as an argument", function () {
  let arabic = 4;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("IV");
});

test("returns V if passed 5 as an argument", function () {
  let arabic = 5;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("V");
});

test("returns VII if passed 7 as an argument", function () {
  let arabic = 7;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("VII");
});

test("returns IX if passed 9 as an argument", function () {
  let arabic = 9;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("IX");
});

test("returns XII if passed 12 as an argument", function () {
  let arabic = 12;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("XII");
});

test("returns XIV if passed 14 as an argument", function () {
  let arabic = 14;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("XIV");
});

test("returns XCIX if passed 99 as an argument", function () {
  let arabic = 99;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("XCIX");
});

test("returns CXI if passed 111 as an argument", function () {
  let arabic = 111;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("CXI");
});

test("returns CMXCIX if passed 999 as an argument", function () {
  let arabic = 999;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("CMXCIX");
});

test("returns C if passed 100 as an argument", function () {
  let arabic = 100;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("C");
});

test("returns D if passed 500 as an argument", function () {
  let arabic = 500;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("D");
});

test("returns M if passed 1000 as an argument", function () {
  let arabic = 1000;
  let roman = convertToNewRoman(arabic);
  expect(roman).toEqual("M");
});



