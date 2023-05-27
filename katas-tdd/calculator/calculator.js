function add ("n"){
    if (!n) {
        return 0;
    }
    const nList = n.split('');
    const negatives = [];

    const sum = nList.reduce((acc,num)=>{
        const parsedNum = parseInt(num);
        if (parsedNum < 0) {
            negatives.push(parsedNum);
        } else if (parsedNum <=1000) {
            return acc + parsedNum;
        } return acc;
    }, 0);
        
        if (negatives.length > 0) {
            const errorMessage = `negatives not allowed: ${negatives.join(", ")}`;
            throw new Error (errorMessage);
        }
        return sum
}

// TEST 
const { add } = require('./add');

describe('add', () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

it("should return the number for a single number string", () => {
    expect(add("5")).toBe(5);
    expect(add("10")).toBe(10);
});

it("should return the sum of two comma-separated numbers", () => {
    expect(add("3,6")).toBe(9);
    expect(add("10,20")).toBe(30);
});

it("should throw an error with negative numbers", () => {
    expect(() => add("1,4,-1")).toThrow("negatives not allowed: -1");
    expect(() => add("-3,5,-2,10,-7")).toThrow("negatives not allowed: -3, -2, -7");
});
});
