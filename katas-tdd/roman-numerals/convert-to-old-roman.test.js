let convertToOldRoman = require("./convert-to-old-roman");

test("returns MMM if passed 3000 as an argument", function () {
  let arabic = 3000;
  let roman = convertToOldRoman(arabic);
  expect(roman).toEqual("MMM");
});
test("returns MMMD if passed 3500 as an argument", function () {
  let arabic = 3500;
  let roman = convertToOldRoman(arabic);
  expect(roman).toEqual("MMMD");
});

test("returns MMMDCC if passed 3500 as an argument", function () {
  let arabic = 3700;
  let roman = convertToOldRoman(arabic);
  expect(roman).toEqual("MMMDCC");
});

test("returns MMMDCCL if passed 3500 as an argument", function () {
  let arabic = 3750;
  let roman = convertToOldRoman(arabic);
  expect(roman).toEqual("MMMDCCL");
});

test("returns MMMDCCLXXXX if passed 3500 as an argument", function () {
  let arabic = 3790;
  let roman = convertToOldRoman(arabic);
  expect(roman).toEqual("MMMDCCLXXXX");
});

test("returns MMMDCCLXXXXII if passed 3500 as an argument", function () {
  let arabic = 3792;
  let roman = convertToOldRoman(arabic);
  expect(roman).toEqual("MMMDCCLXXXXII");
});



