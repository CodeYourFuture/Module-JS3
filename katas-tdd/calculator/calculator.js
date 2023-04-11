function add(numbers) {
    let sum = 0;
  
    const numbersArray = numbers
      .split(",")
      .map(n => Number(n));
  
    numbersArray.forEach(n => {
      if (n < 0) {
        throw new Error(`negatives not allowed: ${n}`);
      }
    });
  
    const numbersLessThan1000 = numbersArray.filter(n => n <= 1000);
    numbersLessThan1000.forEach(n => sum += n);
  
    return sum;
  }
  
  module.exports = add;