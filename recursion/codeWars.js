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

/* 
Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
*/

const factorial = (num) => {
  return num <= 1 ? 1 : num * factorial(num - 1);
};

console.log(`factorial 5 = ${factorial(5)}`);

/* 
Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function.
*/

const all = (arr, callback) => {
  if (arr.length === 0) return true;

  if (callback(arr[0])) {
    arr.shift();
    return all(arr, callback);
  } else {
    return false;
  }
};
const allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(`allAreLessThanSeven = ${allAreLessThanSeven}`);

/* 
Write a function called productOfArray which takes in an array of numbers and returns the product of them all
*/

const productOfArray = (arr) => {
  return arr.length == 0 ? 1 : arr.shift() * productOfArray(arr);
};

console.log(`product Of Array [1,2,3,10] = ${productOfArray([1, 2, 3, 10])}`);

// https://www.codingame.com/
/*
The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
*/
const replicate = (times, num) => {
  return times <= 0 ? [] : [num].concat(replicate(--times, num));
};
console.log(replicate(3, 5));
