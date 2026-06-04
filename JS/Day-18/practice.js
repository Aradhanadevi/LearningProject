//toFixed() method is used to format a number using fixed-point notation. It returns a string representation of the number that does not use exponential notation and has exactly the specified number of digits after the decimal point.

let num = 3.14159;
let formattedNum = num.toFixed(2);
console.log(formattedNum); // Output: "3.14"

//If you only used toFixed with no arguments, it will default to 0 decimal places and round the number to the nearest integer.

let roundedNum = num.toFixed();
console.log(roundedNum); // Output: "3"