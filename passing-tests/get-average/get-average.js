// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
let filteredNumbers=numbers.filter((value)=>typeof value==='number');

if (filteredNumbers.length ===0){
    return 0;
}
 let sum=filteredNumbers.reduce((total,num) =>total + num,0 );
 let average=sum/filteredNumbers.length;
 return average;
}


module.exports = average;
