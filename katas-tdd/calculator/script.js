function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  const numberArray = numbers.split(",");
  const parsedNumbers = numberArray.map((num) => parseFloat(num));

  // Filter out numbers greater than 1000
  const validNumbers = parsedNumbers.filter((num) => num <= 1000);

  // Check for negative numbers
  const negativeNumbers = validNumbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
  }

  return validNumbers.reduce((x, y) => x + y);
}

let numbers = "3,4,6,2000"
console.log(add(numbers))

let numbersTwo = "2,3,5,-1,-2"
console.log(add(numbersTwo))