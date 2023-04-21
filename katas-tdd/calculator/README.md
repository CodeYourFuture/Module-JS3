# String Calculator Kata

Using TDD, write a function that calculates the sum of the numbers passed as a comma separated string.

## Before you start

- Try not to read ahead.
- Do one task at a time. The trick is to learn to work incrementally.
- Always write a test first, then make the test pass.

## The kata

### Step 1: the simplest thing

Create a simple calculator function called `add` which takes a string argument called `numbers`.

- The numbers argument is a comma separated list of numbers as a string, and can contain 0, 1 or 2 numbers, e.g. `""` or `"5"` or `"3,6"`
- The function will return their sum and for an empty string it will return 0, e.g. `""` will return `0`, `"5"` will return `5`, `"3,6"` will return `9`.
- Start with the simplest test case of an empty string and move to 1 and then two numbers.
- Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
- Remember to refactor after each passing test.


// Test Case 1
test('returns 0 for an empty string', () => {
  expect(calculateSum('')).toBe(0);
});

// Test Case 2
test('returns the number for a single number string', () => {
  expect(calculateSum('5')).toBe(5);
});

// Test Case 3
test('returns the sum of two numbers in a string separated by a comma', () => {
  expect(calculateSum('2,3')).toBe(5);
});

// Test Case 4
test('returns the sum of multiple numbers in a string separated by a comma', () => {
  expect(calculateSum('1,2,3,4')).toBe(10);
});

function calculateSum(numbersString) {
  if (numbersString === '') {
    return 0;
  }

  const numbersArray = numbersString.split(',');
  const sum = numbersArray.reduce((total, current) => {
    return total + parseInt(current);
  }, 0);

  return sum;
}


### Step 2: handle an unknown amount of numbers

Allow the `add` function to handle an unknown amount of numbers passed as an argument.

function add(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

### Step 3: ignore big numbers

Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2


function add(numbers) {
  let sum = 0;
  if (numbers === "") {
    return sum;
  } else {
    let nums = numbers.split(",");
    for (let i = 0; i < nums.length; i++) {
      let num = parseInt(nums[i]);
      if (num <= 1000) {
        sum += num;
      }
    }
    return sum;
  }
}


### Step 4: negative numbers

Calling `add` with a negative number will throw an error `"negatives not allowed: "` - and the negative that was passed.

For example `add("1,4,-1")` should throw an error with the message `"negatives not allowed: -1"`.

If there are multiple negatives, show all of them in the error message.


function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let arr = numbers.split(",");
  let sum = 0;
  let negatives = [];
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);
    if (num < 0) {
      negatives.push(num);
    }
    if (num <= 1000) {
      sum += num;
    }
  }
  if (negatives.length > 0) {
    throw new Error("negatives not allowed: " + negatives.join(","));
  }
  return sum;
}


Hint: You'll need to test that the `add` function throws an error which you can do with the matcher [toThrow()](https://jestjs.io/docs/expect#tothrowerror)
