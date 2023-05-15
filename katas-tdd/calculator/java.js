function add(numbers){
    
      if (!numbers) {
        return 0;
      }

      let nums = numbers.split(",");
      let total = 0;
      negetiveArray = [];
      for (let i = 0; i < nums.length; i++) {
        let num = parseInt(nums[i]);
        if(num<0){
          negetiveArray.push(num)
        }
        else if (num <= 1000) {
          total += num;
        }
    }
        if(negetiveArray.length>0){
            throw new Error("negatives not allowed:" + negetiveArray.join(","));
        }

      return total;
    }

 




//test
test("for '' parameter the function should return 0 ",()=>{
let numbers = '';
expect(add(numbers)).toEqual(0)
});

test("for '5' parameter the function should return 5", () => {
  let numbers = "5";
  expect(add(numbers)).toEqual(5);
});

test("for '3,6' parameter the function should return 9", () => {
  let numbers = "3,6";
  expect(add(numbers)).toEqual(9);
});

test("Numbers bigger than 1000 should be ignored", () => {
  let numbers = "2,1001";
  expect(add(numbers)).toEqual(2);
});

test("calling the function with a negative number will throw an error", () => {
  expect(() => add("1,4,-1")).toThrow("negatives not allowed:-1");
});


