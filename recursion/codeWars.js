/* 
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
*/

const sumRange = (num) => {
  return num <= 1 ? 1 : num + sumRange(num - 1);
};

console.log(`sumRange = ${sumRange(3)}`);

/* 
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
*/

const power = (base, exp) => {
  //   if (exp == 0) return 1;
  return exp == 0 ? 1 : base * power(base, exp - 1);
};

console.log(`power(2, 4) = ${power(2, 4)}`);
