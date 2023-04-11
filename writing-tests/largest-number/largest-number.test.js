let getLargestNumber = require("./largest-number");

test("returns largest number in array", function() {
  const input = [3, 21, 88, 4, 36];
  const output = 88;

  const largestNumber = getLargestNumber(input);

  expect(output).toEqual(largestNumber);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
