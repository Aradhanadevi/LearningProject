//Today we will learn about relation operator === !== operator

// == operator
console.log(1 == 1); // This will only compare the value of 1 and 1, so it will return true
console.log(1 == '1'); // This will compare the value of 1 and '1', so it will return true because JavaScript will convert the string '1' to a number before comparing.

// === operator
console.log(1 === 1); // This will compare the value and type of 1 and 1, so it will return true
console.log(1 === '1'); // This will compare the value and type of 1 and '1', so it will return false because the types are different.
// != operator
console.log(1 != 1); // This will return false because 1 is equal to 1
console.log(1 != '1'); // This will return false because 1 is equal to '1' after type coercion
// !== operator
console.log(1 !== 1); // This will return false because 1 is equal to 1
console.log(1 !== '1'); // This will return true because 1 is not equal to '1' due to different types

