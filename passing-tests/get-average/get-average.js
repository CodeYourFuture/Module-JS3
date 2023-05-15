// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
let numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
function average(numbers) {
    let newNumbers = numbers.filter(item =>typeof item === "number")
    let total = 0;
    newNumbers.forEach(number => total+= number);
    return total/newNumbers.length;
}
//average(numbers)
module.exports = average;
