function addNumbers (x) {
  if(!x){
    return 0;
  }
  const arrOfNumbers = x.split(",");
  let total = 0;
  for(i = 0; i < arrOfNumbers.length; i++){
    total += parseInt(arrOfNumbers[i], 10)
  }
  return total
}
console.log(addNumbers ("1,2,3,4,56,7"))

describe("addNumbers", () => {
  it("should return 0 for an empty string", () => {
    expect(addNumbers("")).toBe(0);
  });

  it("should return the number when a single number is provided", () => {
    expect(addNumbers("5")).toBe(5);
    expect(addNumbers("10")).toBe(10);
  });

  it("should return the sum of two numbers", () => {
    expect(addNumbers("2,3")).toBe(5);
    expect(addNumbers("10,20")).toBe(30);
  });

  it("should return the sum of multiple numbers", () => {
    expect(addNumbers("1,2,3,4,5")).toBe(15);
    expect(addNumbers("10,20,30,40,50")).toBe(150);
  });

  it("should ignore spaces around numbers", () => {
    expect(addNumbers(" 1 , 2 , 3 ")).toBe(6);
    expect(addNumbers("10, 20,30, 40 , 50")).toBe(150);
  });

  it("should handle negative numbers", () => {
    expect(addNumbers("1,-2,3,-4,5")).toBe(3);
    expect(addNumbers("-10,20,-30,40,-50")).toBe(-30);
  });
});