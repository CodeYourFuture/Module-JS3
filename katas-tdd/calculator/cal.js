function calculator(number) {
    if (number == ""){
        return "0"
    } else {
        let sum = 0
        const nums = number.split(',')
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            sum += Number(nums[i])
        }
        return sum.toString()
    }
}

console.log(calculator('3,6'));
