function add(numbers) {
  if (!numbers) {
    return 0;
  }
  let nums = numbers.split(/[\n,]/);
  let negativeNums = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeNums.push(nums[i]);
    } else if (nums[i] <= 1000) {
      sum += parseInt(nums[i]);
    }
  }
  if (negativeNums.length > 0) {
    throw new Error("negatives not allowed: " + negativeNums.join(","));
  }
  return sum;
}

function addNumbers() {
  const numbers = document.getElementById("numbers").value;
  const result = add(numbers);
  document.getElementById("result").textContent = result;
}
