const add = function(...nums) {
  let sum = 0;
  for (let num in nums){
    sum += nums[num];
  }
  return sum;
};

const subtract = function(...nums) {
	let difference = 0;
  for (let num in nums){
    if (num == 0){
      difference += nums[num];
    }
    else{
      difference -= nums[num];
    }
  }
  return difference;
};

const sum = function(...nums) {
  let sum = 0;
  for (let i = 0; i < nums[0].length; i++){
    sum += (nums[0])[i];
  }
  return sum;
};

const multiply = function(...nums) {
  let product = 1;
  for (let i = 0; i < nums[0].length; i++){
    product *= (nums[0])[i];
  }
  return product;
};

const power = function(...nums) {
  let product = nums.reduce((a,b) => a**b);
  return product;
};

const factorial = function(num) {
  result = 1;
  for (let i = 1; i < num+1; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
