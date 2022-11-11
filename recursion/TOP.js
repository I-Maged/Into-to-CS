/* 
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/
const fibs = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    i < 2 ? arr.push(i) : arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};
console.log(fibs(8));

/* 
Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
*/

const fibsRec = (num, arr = [0, 1]) => {
  return num <= 2
    ? arr
    : fibsRec(--num, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
};
console.log(fibsRec(8));
