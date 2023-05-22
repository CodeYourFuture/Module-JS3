let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  expect(getLargestNumber([3,21, 88, 4, 36])).toEqual(88)
});

test("the original array hasn't changed", function () {
  let numbers = [3,21, 88, 4, 36]
  expect(numbers).toEqual([3,21, 88, 4, 36])
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
