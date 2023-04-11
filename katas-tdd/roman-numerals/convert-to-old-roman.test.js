let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function() {
  const n = 1;
  const expected = "I";

  const received = convertToOldRoman(n);

  expect(received).toEqual(expected);
});

test("returns IIII if passed 4 as an argument", function() {
  const n = 4;
  const expected = "IIII";

  const received = convertToOldRoman(n);

  expect(received).toEqual(expected);
});

test("returns V if passed 5 as an argument", function() {
  const n = 5;
  const expected = "V";

  const received = convertToOldRoman(n);

  expect(received).toEqual(expected);
});

test("returns DCCCCLXXXXVIIII if passed 999 as an argument", function() {
  const n = 999;
  const expected = "DCCCCLXXXXVIIII";

  const received = convertToOldRoman(n);

  expect(received).toEqual(expected);
});

test("returns MMXXII if passed 2022 as an argument", function() {
  const n = 2022;
  const expected = "MMXXII";

  const received = convertToOldRoman(n);

  expect(received).toEqual(expected);
});