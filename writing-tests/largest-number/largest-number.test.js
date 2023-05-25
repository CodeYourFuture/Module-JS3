let getLargestNumber = require("./largest-number");
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

test("returns largest number in array", function () {
  let array = [3, 21, 88, 4, 36];
  let expected = 88;
  let output = getLargestNumber(array);

  expect(output).toEqual(expected);
});

// also test that the original array hasn't changed
test("original array hasn't changed", function () {
  let array = [3, 21, 88, 4, 36];
  let arrayCopy = [...array];

  getLargestNumber(array);

  expect(array).toEqual(arrayCopy);
});
