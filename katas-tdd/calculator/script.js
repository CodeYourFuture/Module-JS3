function calculate(someString) {
    let numbers = someString.split(",");
    let negative = numbers.map(num => Number(num)).filter(num => num < 0);
    if (negative.length !==0){
        throw `negatives not allowed: ${negative}`;
    } else {
        let filteredNumbers = numbers.filter(num => num < 1000);
        let result = 0;
        return filteredNumbers.reduce(
          (accumulate, current) => accumulate + Number(current),
          result
        );
    }
}

//tests
test("calculates numbers in the passed string separated by comas", function () {
  let string1 = "1,6000,4,8,4";
  
  expect(calculate(string1)).toEqual(17);
});

test("calculates numbers in the passed string separated by comas", function () {
  let string2 = "3,7,5";
  
  expect(calculate(string2)).toEqual(15);
});

test("calculates numbers in the passed string separated by comas", function () {
  let string3 = "";
  
  expect(calculate(string3)).toEqual(0);
});

test("calculates numbers in the passed string separated by comas", function () {
  let string4 = "1,,6,3,,9";

  expect(calculate(string4)).toEqual(19);
});

test("throws on negatives", () => {
    function noNegatives(){
        calculate("1,-3,2")
    }

    expect(noNegatives).toThrow(`negatives not allowed: -3`);
});