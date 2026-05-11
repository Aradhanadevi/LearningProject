//The code given below is practice code for day 1 of JS

//Using console.log you can see the output in the terminal.
console.log(10);  //Here the answer will be 10
console.log("Fresh Start"); //here the output will be fresh start

//Variables in js

//The below 4 lines of code is an object in js
{
    name = "John"; //This is string variable, you can use '' or "" in js.
    age = 21; // This is number variable, you can use flot, or regular numbers here in js.
}

console.log(name); // It will display the value of name which is john, whic is declared in above object.
console.log(age); // It will display the value of age which is 21, whic is declared in above object.
let demo = false; //This is boolean variable, its value can be true or false.
console.log(demo); // Will display flase as its set to false
demo = true; //Now we changed it to true so when we print it will show true
console.log(demo); // Will display true 
type_of = typeof demo; // This will function will return the type of variable 
 
console.log(type_of); // This will show boolean in terminal

let deviName = "Devi"; //Let keyword can be used to declare a variable.

console.log(deviName); //Will show Devi in terminal

deviName = "Aradhana"; //We can change the value of variable declared with let keyword, here we changed it to Aradhana
console.log(deviName);//Will show Aradhana in terminal

//Concatination of string means adding or joining strings

let firstStr = "Hello"; 

let secondStr = "World";

let fullStr = firstStr + " " + secondStr; //This will join the two strings with a space in between, so the output will be Hello World

console.log(fullStr);

//Append String

//Strings are immutable in js, so when we append a string it creates a new string and assigns it to the variable, so the original string remains unchanged.

let appendstr = "Hello";

appendstr += " World";

console.log(appendstr); //This will show Hello World in terminal, as we have appended World to Hello using += operator

//Concatinate String
//Use concat() method to join two or more strings, it does not change the original string but returns a new string.
let str1 = "hello";

let str2 = "world";

let greeting = str1.concat(' ', str2);
console.log(greeting); //This will show hello world in terminal, as we have concatenated str1 and str2 with a space in between using concat() method