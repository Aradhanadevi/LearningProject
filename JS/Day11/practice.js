/*Today we will look into the numbers data type in js */

//In js you don't need to declare wether the number if float or integer, js will automatically decide it for you

let num1 = 10; //integer
let num2 = 3.7; //float
console.log(num1);
console.log(num2);

console.log(typeof num1); //number
console.log(typeof num2); //number


//No matter what type of number you declare, js will always consider it as a number data type. You can perform various operations on numbers such as addition, subtraction, multiplication, and division.

/*You can use arethmetic operator + - * % / operators to do some operations
with the numbers. */

console.log(1 + 1);

console.log(7 - 9); //negative number of the number being subtracted is small
console.log(2 * 3);
console.log(7 % 3);
console.log(9 / 3);

console.log(2 ** 3);

//If you try to add numbers with string it becomes string.

let ex1 = "10" + 10; //This is string

console.log(typeof (ex1)) //string

console.log(ex1);

let ex2 = 7 + "45";

console.log(ex2);
console.log(typeof (ex2));


//If you use other operator and if string is a number then it will normally perfor the operations

let ex3 = "8" - 6;
let ex4 = "3" * 2;
let ex5 = "7" % 4;
let ex6 = "2" ** 2;

console.log(ex3);
console.log(ex4);
console.log(ex5);
console.log(ex6);

console.log(typeof (ex3)); //now the string will be converted to number

//And if you use boolean it will convert true - 1 and false - 0

let ex7 = true + 1;
console.log(ex7);

let ex8 = false + 1;
console.log(ex8);

//and if you try to other operation than + on non number string it will show nan(not a number)

let ex9 = "abc" - 10; 
console.log(ex9);

console.log(typeof (ex9)); //Here it will still be converted to number

//lets see about undefined and null

let ex10 = undefined + 10;
console.log(ex10);//NAN
console.log(typeof (ex10));//Here it will be number

//Lets try other operation
let ex11 = undefined - 9;
console.log(ex11);//NAN
console.log(typeof (ex11));//Here it will be number

//Lets try null
let ex12 = null + 10; //By default the value of null is zero
console.log(ex12);//10
console.log(typeof (ex12));//Here it will be number

//So this is how you can use numbers in js to perform operations.
