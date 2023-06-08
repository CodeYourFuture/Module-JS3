// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let total = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++);
    if (typeof numbers[i] === "number") {
        total += numbers[i];
        count++;
    }
    if (count === 0) {
        return null;
    }
    return total / count;
}    
module.exports = average;


//unsure about this one

