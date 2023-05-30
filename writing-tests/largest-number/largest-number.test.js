let getLargestNumber = require("./largest-number");


// example
// input: [3, 21, 88, 4, 36];
// expected: 88;
test("returns largest number in array", function () {
  let input = [3, 21, 88, 4, 36];
  expect(getLargestNumber(input)).toEqual(88);
});

// also test that the original array hasn't changed

test("the original array hasn't changed",function(){
  let originalArray = [3, 21, 88, 4, 36];
  let copyArray = originalArray.slice();
  getLargestNumber(copyArray);
  expect(copyArray).toEqual(originalArray);
});