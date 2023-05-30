function add(...numbers) {
  let Numbers = numbers.join(",");
  return addString(Numbers);
}

function addString(numbers) {
  if (numbers === "") {
    return 0;
  }

  let negativeNumbers = [];
  let sum = numbers
    .split(",")
    .map((num) => {
      let parsedNum = parseInt(num);
      if (parsedNum < 0) {
        negativeNumbers.push(parsedNum);
      } else if (parsedNum <= 1000) {
        return parsedNum;
      }
      return 0;
    })
    .reduce((a, b) => a + b);

  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
  }

  return sum;
}

test("empty string should return 0", () => {
  expect(add("")).toBe(0);
});

test("single number should return the number itself", () => {
  expect(add("5")).toBe(5);
});

test("two numbers should return their sum", () => {
  expect(add("3", "6")).toBe(9);
});

test("unknown amount of numbers should return their total", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("numbers bigger than 1000 should be ignored", () => {
  expect(add("2,1001")).toBe(2);
});

test("negative numbers should throw an error", () => {
  expect(() => add("1,4,-1")).toThrow("negatives not allowed: -1");
});

test("multiple negative numbers should throw an error with all negatives listed", () => {
  expect(() => add("-1,4,-3")).toThrow("negatives not allowed: -1, -3");
});
