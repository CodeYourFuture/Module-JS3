let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let inputNumbers = [3, 7, 1000, 5];
  let highest = getLargestNumber(inputNumbers);
  expect(highest).toEqual(1000);
  expect(inputNumbers).toEqual([3, 7, 1000, 5]);

});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
