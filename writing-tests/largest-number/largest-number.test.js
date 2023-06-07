let getLargestNumber = require("./largest-number");

describe("getLargestNumber", () => {
  it("should return the largest number from the array", () => {
    expect(getLargestNumber([5, 10, 3, 8, 2])).toBe(10);
    expect(getLargestNumber([-5, -10, -3, -8, -2])).toBe(-2);
    expect(getLargestNumber([-5, 10, -3, 8, -2])).toBe(10);
    expect(getLargestNumber([5, 10, 3, 8, 10])).toBe(10);
  });

  it("should return the largest number when the array has a single element", () => {
    expect(getLargestNumber([5])).toBe(5);
  });

  it("should return undefined when the array is empty", () => {
    expect(getLargestNumber([])).toBeUndefined();
  });

  it("should return the largest negative number when the array has all negative numbers", () => {
    expect(getLargestNumber([-5, -10, -3, -8, -2])).toBe(-2);
  });
});
