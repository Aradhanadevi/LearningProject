//Unary operator


//logical not operator
let a = true;
console.log(!a); //false

let b = false;
console.log(!b); //true

//unary plus operator
let c = "5";
console.log(+c); //5

//unary minus operator
let d = 10;
console.log(-d); //-10

//Bitwise NOT operator
let e = 5;
console.log(~e); //-6 (in binary: 0000 0101 becomes 1111 1010)

//typeof operator
let f = "Hello";
console.log(typeof f); //string

//logical and operator
let g = true;
let h = false;
console.log(g && h); //false

//logical or operator
console.log(g || h); //true

//Bitwise XOR operator
let i = 5;
let j = 3;
console.log(i ^ j); //6 (in binary: 0000 0101 XOR 0000 0011 becomes 0000 0110)

//Left shift operator
let k = 5;
console.log(k << 1); //10 (in binary: 0000 0101 becomes 0000 1010)

//Right shift operator
let l = 5;
console.log(l >> 1); //2 (in binary: 0000 0101 becomes 0000 0010)

/*
These are all the unary operators in JavaScript. They perform operations on a single operand and return a value.
*/
