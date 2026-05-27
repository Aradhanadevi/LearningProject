//Today we will learn about NAN (not a number)

//NaN is the property of global object.

//NaN is not equal to anything even to itself

let ex1 = 0 / 0;

console.log(ex1); //NAN

console.log(NaN == NaN); //false

// isNan() Func

console.log(isNaN(0 / 0)); //True as its not defined
console.log(isNaN(11)); //False as its a number
console.log(isNaN("11")); //False as its a string but can be converted to number
console.log(isNaN("abc")); //True as its a string and cannot be converted to number
console.log(isNaN("11abc")); //True as its a string and cannot be converted to number


console.log(Number.isNaN("abc")); //False as its a string and cannot be converted to number but Number.isNaN() does not convert the string to number before checking if its NaN or not
console.log(Number.isNaN(11)); //False as its a number
console.log(Number.isNaN("11")); //False as its a string but can be converted to number but Number.isNaN() does not convert the string to number before checking if its NaN or not
console.log(Number.isNaN(0 / 0)); //True as its not defined
console.log(Number.isNaN(null)); //False as null is not a number but Number.isNaN() does not convert null to number before checking if its NaN or not

//We use Number.isNaN() instead of isNaN() to check if a value is NaN or not as it does not convert the value to number before checking if its NaN or not.
