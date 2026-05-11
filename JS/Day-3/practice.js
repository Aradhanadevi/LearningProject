//The code given below is going to show typeof operator in js.

//The js is dynamically typed, meaning that we don't have to specify the type of variable during declaration, like c++

//Lets create some variables and check if they change there type after we ressaign them.

//Also the type of operator will output the result in string

let aVar = 10;

console.log(aVar);

console.log(typeof aVar); //This is numeric

aVar = "Hello"; //This is now string

console.log(aVar);

console.log(typeof aVar); //This is string

aVar = true; //This is now boolean

console.log(aVar);

console.log(typeof aVar); //This is boolean

//Now lets see what is the typeof of null

let a = undefined;
let b = null;

console.log(typeof a); //This is undefined
console.log(typeof b); //This is object, this is a bug in js, it should be null but it is object, this is a well known bug in js and it will not be fixed because of backward compatibility issues.