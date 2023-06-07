// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let onlyNumbers = numbers.filter((entry) => {
       return (typeof entry === "number")
    })
    let total = onlyNumbers.reduce ((accumulator, aNumber) => {
        return accumulator + aNumber;
    }, 0)
    return average = total / onlyNumbers.length;
};

module.exports = average;
