//Today we will learn about maths in and if and else statement

let age = 19;
console.log(`Age - ${age}`);
//If Else Statement if, if statement is true then the block inside if will be executed, else it will be else statement.
if (age >= 18) {
    console.log("Old enough to vote.");
} else {
    console.log("Cannot vote");
}

age = 17;
console.log(`Age - ${age}`);
if (age >= 18) {
    console.log("Old enough to vote.");
} else {
    console.log("Cannot vote");
}

//If you have multiple conditions you can use else if statement

let name = "Anjali";
console.log(`Name - ${name}`);
if (name = "Aradhana") {
    console.log(`CGPA - 9.9`);
}else if (name = "Anjali") {
    console.log(`CGPA - 9.8`);
} else {
    console.log("FAIL LOL");
}

name = "Aradhana"
console.log(`Name - ${name}`);
if (name = "Aradhana") {
    console.log(`CGPA - 9.9`);
}else if (name = "Anjali") {
    console.log(`CGPA - 9.8`);
} else {
    console.log("FAIL LOL");
}

//The boolean values have true and false

//True values are - true, 1, "non-empty string", [], {}, etc.

//False values are - false, 0, "", null, undefined, NaN
let x = 0;
if (x) {
    console.log("This is true");
} else {
    console.log("This is false");//False
}
if (null) {
    console.log("This is true");
} else {
    console.log("This is false");//False
}

//Logical Or And Logical And operator
let p = true;
let q = false;
if (p || q) {
    console.log("At least one is true");
} else {
    console.log("Both are false");
}

//Logical AND operator
if (p && q) {
    console.log("Both are true");
} else {
    console.log("At least one is false");
}

/*Nullish Coalescing Operator */
let r = null;
let s = "Hello";
let t = r ?? s;
console.log(t); // Output: "Hello"

/*The output will be "Hello" because r is null and s is "Hello" */

//It helps with scenario where you want to return a value only if the left-hand side is null or undefined, otherwise it returns the left-hand side value.

/*math objects in javascript */

//Math random
let randomNum = Math.random();
console.log(randomNum); // Output: A random number between 0 (inclusive) and 1 (exclusive)

//math floor and math ceil
let num1 = 4.7;
console.log(Math.floor(num1)); // Output: 4 (rounds down to the nearest integer)
console.log(Math.ceil(num1)); // Output: 5 (rounds up to the nearest integer)

//Math round
let num2 = 4.5;
console.log(Math.round(num2)); // Output: 5 (rounds to the nearest integer)

//Math trunc
let num3 = 4.9;
console.log(Math.trunc(num3)); // Output: 4 (removes the decimal part)

//Math sqrt
let num4 = 16;
console.log(Math.sqrt(num4)); // Output: 4 (square root of 16 is 4)

//Math cbrt
let num5 = 27;
console.log(Math.cbrt(num5)); // Output: 3 (cube root of 27 is 3)

//Math ABS
let num6 = -5;
console.log(Math.abs(num6)); // Output: 5 (absolute value of -5 is 5)

//Math pow
let base = 2;
let exponent = 3;
console.log(Math.pow(base, exponent)); // Output: 8 (2 raised to the power of 3 is 8)