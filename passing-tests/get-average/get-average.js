// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings


function average(numbers) {
    let arrayOfNumbers = []
    for(let number of numbers){
        if (typeof(number) === 'number'){
            arrayOfNumbers.push(number)
        }
    }
    let total = arrayOfNumbers.reduce((a, b)=>  a + b)/arrayOfNumbers.length
    console.log(total)
    return total
}


module.exports = average;
