const add = require("./calculator");

test("returns 0 if passed an empty string", () => {
  const numbers = "";
  const expected = 0;
  const received = add(numbers);

  expect(received).toEqual(expected);
});

test("returns 5 if passed '5'", () => {
  const numbers = "5";
  const expected = 5;
  const received = add(numbers);

  expect(received).toEqual(expected);
});

test("returns 9 if passed '3,6'", () => {
  const numbers = "3,6";
  const expected = 9;
  const received = add(numbers);

  expect(received).toEqual(expected);
});

test("should handle an unknown amount of numbers passed as an argument", () => {
  const numbers = "3,6,88,500";
  const expected = 597;
  const received = add(numbers);

  expect(received).toEqual(expected);
});

test("should ignore numbers bigger than 1000 passed as an argument", () => {
  const numbers = "2,1001";
  const expected = 2;
  const received = add(numbers);

  expect(received).toEqual(expected);
});

test("should throw an error if a negative number is passed as an argument", () => {
  const numbers = "1,4,-1";
  const received = () => add(numbers);

  expect(received).toThrow("negatives not allowed: -1");
});
