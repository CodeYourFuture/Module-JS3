let add = require("./calculator");

test("return sum of numbers from array string", function () {
    let add = ["", "3", "7", "3,6", "1,9"];
    
    let expected = ["0", "3", "7", "9", "10"];

    let output = add(numbers);

    expect(output).toEqual(expected);
});
