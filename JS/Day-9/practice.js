/*Today we will learn about repeat and replace methods of js as the 
name suggest they are to be used when we want to repeat or replace strings.*/

//Repeat method will repeat the string how manytimes you want but it should be non negative number and finite

let repetExample = "This is an ex for repeat function of js \n";

let repeat1 = repetExample.repeat(3);

console.log(repeat1)

//it should we not be numbers like 4.2, else it will round down to nearest integer

let ex2 = "This is ex 2 \n"
console.log(ex2.repeat(3.4)); //3 times

//Will throw range error if u try to use negative no or infinity

//Replace

//This function will help you to replace the part of string and create new string

let ex3 = "Hey this is part of example replace function in js\n";

console.log(ex3);

let replace1 = ex3.replace("js", "javascript");

console.log(replace1);

//Also this function is case sensitive and will not replace the word if not found in the string.