//Arrays, destructuring, rest and spread operators

//Arry declaration
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']

//Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

//array spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

//array joining
const joined = arr1.concat(arr2);
console.log(joined); // [1, 2, 3, 4, 5, 6]

//array reversing
const reversed = [...arr1].reverse();
console.log(reversed); // [3, 2, 1]

