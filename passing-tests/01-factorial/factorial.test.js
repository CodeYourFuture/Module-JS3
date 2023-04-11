let factorial = require("./factorial");

describe("Factorial", function () {
  test("Factorial", function () {
    let in1 = 5;
    let exp1 = 120;

    let in2 = 9;
    let exp2 = 362880;

    let in3 = 1;
    let exp3 = 1;

    let in4 = 0;
    let exp4 = 1;

    let in5 = 3;
    let exp5 = 6;

    let out1 = factorial(in1);
    let out2 = factorial(in2);
    let out3 = factorial(in3);
    let out4 = factorial(in4);
    let out5 = factorial(in5);

    expect(out1).toEqual(exp1);
    expect(out2).toEqual(exp2);
    expect(out3).toEqual(exp3);
    expect(out4).toEqual(exp4);
    expect(out5).toEqual(exp5);
  });
});
