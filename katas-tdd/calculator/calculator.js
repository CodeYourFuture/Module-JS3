function add(...numbers) {  //this allows the function to handle an unknown amount of numbers passed as an argument.
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
            let sum = 0;

        if (numbers[i].includes(",")) {
            let nums = numbers[i].split(",");
        
        for (let j = 0; j < nums.length; j++) {
           let num = parseInt(nums[j], 10);
           if (num < 1000) {
            sum += num;
           }
        }
        } else if (result < 0) {
            return "Negatives not allowed"
        } else {
            let num = parseInt(numbers[i], 10);
            if (num <= 1000) {
                sum += num;
            }
           }
           result.push(sum.toString());
        }
        return result;
    }

module.exports = add;