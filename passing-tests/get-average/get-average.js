// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
   let total = 0 ,counter=0;
    let length = numbers.length;
    for (let i = 0; i < length; i++) {
        if (typeof numbers[i] === "number") {
            total += numbers[i]
            counter++;
            }
        }
            return total/counter;
}

module.exports = average;
