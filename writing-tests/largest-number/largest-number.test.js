let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let input = [3, 21, 88, 4, 36];
  let expected = 88;
  let output = getLargestNumber(input);

  expect(output).toEqual(expected);
});

test("check original array hasn't changed", function () {
  let input = [3, 21, 88, 4, 36];
  let inputCopy = [...input];
  getLargestNumber(input);

  expect(input).toEqual(inputCopy);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
