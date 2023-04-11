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

### Step 2: handle an unknown amount of numbers

Allow the `add` function to handle an unknown amount of numbers passed as an argument.

### Step 3: ignore big numbers

Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

### Step 4: negative numbers

Calling `add` with a negative number will throw an error `"negatives not allowed: "` - and the negative that was passed.

For example `add("1,4,-1")` should throw an error with the message `"negatives not allowed: -1"`.

If there are multiple negatives, show all of them in the error message.

Hint: You'll need to test that the `add` function throws an error which you can do with the matcher [toThrow()](https://jestjs.io/docs/expect#tothrowerror)
