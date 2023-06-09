function add(numbers) {
  let result = 0;
  let numbersArray = [];
  let errorMessage = "";
  if (numbers) {
    numbersArray = numbers.split(",");
    for (let i = 0; i < numbersArray.length; i++) {
      if (parseInt(numbersArray[i]) <= 1000) {
        result += parseInt(numbersArray[i]);
      }
      if (parseInt(numbersArray[i]) < 0) {
        errorMessage = errorMessage + " " + numbersArray[i];
      }
    }
  }
  if (errorMessage.length > 0) {
    errorMessage = "negatives not allowed:" + errorMessage;
    throw errorMessage;
  }
  return result;
}

module.exports = add;
