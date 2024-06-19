// function add(numbers) {
//     if (numbers === "") {
//       return 0;
//     } else {
//       let numArr = numbers.split(",");
//       let sum = 0;
//       let negatives = [];
//       for (let num of numArr) {
//         let parsedNum = +num;
//         if (isNaN(parsedNum)) {
//           continue; // Ignore non-numeric values
//         } else if (parsedNum < 0) {
//           negatives.push(parsedNum); // Collect negative numbers
//         } else if (parsedNum <= 1000) {
//           sum += parsedNum; // Add numbers up to 1000
//         }
//       }

//       if (negatives.length > 0) {
//         throw new Error("Negatives not allowed: " + negatives.join(", "));
//       }

//       return sum;
//     }
//   }



function add(numbers) {
    const parsedNums = numbers
      .split(",")
      .map(Number)
      .filter(num => !isNaN(num) && num <= 1000);

    const negatives = parsedNums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error("Negatives not allowed: " + negatives.join(", "));
    }

    return parsedNums.reduce((sum, num) => sum + num, 0);
  }


  test("return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test('return sum of the two numbers', () => {
    expect(add("2,5")).toBe(7);
  });
  test('return sum of the numbers', () => {
    expect(add("2,5,5,1001")).toBe(12);
  });
  test('throw error for negative numbers', () => {
    expect(() => {add("2,5,5,-1");
    }).toThrowError("Negatives not allowed: -1");
  });
