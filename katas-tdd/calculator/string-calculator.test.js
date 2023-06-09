let add = require("./string-calculator");

test("add no values", function () {
  let inputString = "";
  let output = add(inputString);
  expect(output).toEqual(0);
});

test("add single value", function () {
  let inputString = "5";
  let output = add(inputString);
  expect(output).toEqual(5);
});

test("add two values", function () {
  let inputString = "5,8";
  let output = add(inputString);
  expect(output).toEqual(13);
});

test("add several values", function () {
  let inputString = "5,8,15,22";
  let output = add(inputString);
  expect(output).toEqual(50);
});

test("exclude 1000+ values", function () {
  let inputString = "5,8,1000,1001,15,22";
  let output = add(inputString);
  expect(output).toEqual(1050);
});

test("throws on negative", () => {
  let inputString = "5,-8,1000,1001,15,22";
  expect(() => {
    add(inputString);
  }).toThrow("negatives not allowed: -8");
});

test("throws on negative", () => {
  let inputString = "5,-8,1000,1001,-15,22";
  expect(() => {
    add(inputString);
  }).toThrow("negatives not allowed: -8 -15");
});
