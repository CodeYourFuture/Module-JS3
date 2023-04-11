let average = require("./get-average");

test("Average", function () {
  let numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
  let expected = 5;

  let output = average(numbers);

  expect(output).toEqual(expected);
});
