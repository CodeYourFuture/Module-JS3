function factorial(int) {
  let result = 1;

  for (let i = int; i > 1; i--) {
    result *= i;
  }

  return result;
}
console.log(factorial(5));
