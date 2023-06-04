

function findSum(str){
    if(str === ""){
        return 0
    } else if(str !== "" && str.length === 1){
      return parseInt(str)
    } else{
      let newArray = str.split(",")
      let sum = 0
      for (let item of newArray){
        if((parseInt(item))< 0){
          
          const error = new Error(`negatives not allowed: ${item}`);
          console.log(error)
          return error
        }else if (! isNaN(item) && (parseInt(item))<1000 && (parseInt(item))>=0 ){
          sum += parseInt(item)
        } 
      }
      return sum
    }
}

findSum("3,5,6,7,-1")





tests

test("When string is empty", () => {
  expect(findSum("")).toEqual(0);
});

test("When string has 1 number", () => {
  expect(findSum("1")).toEqual(1);
});

test("When string has more then 1 number", () => {
  expect(findSum("1,5")).toEqual(6);
});

test("ignore the numbers which bigger then 1000", () => {
  expect(findSum("6,1001")).toEqual(6);
});

test("If the numbers is negative", () => {
  expect(findSum("6,5,-1")).toThrow("negatives not allowed: -1");
});
