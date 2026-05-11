//Today we will learn about slice and trime functions in JavaScript
//Also we will learn about Uppercase and Lowercase functions in JavaScript


//The Uppercase function is used to convert a string to uppercase letters.

let str1 = "Hello World";

console.log(str1.toUpperCase()); //The answers will be in capital

//Now lets see LowersCase method, as name suggests it will convert the string to 🔂

let str2 = "Hello Universe, HELLO";

console.log(str2.toLowerCase());// This will show it in lowercase

//Slice method is used to slice a part of the string and it will be assigned to new string.

let str3 = "This is an example of Slice method in Javascript";

let sliceOperator = str3.slice(5);

console.log(sliceOperator);



sliceOperator = str3.slice(7, 10); //You can also give staring and ending index here.

console.log(sliceOperator);


sliceOperator = str3.slice(-4); //You can also give negative index here

console.log(sliceOperator);


//Now here we will learn about trim methods, trim(), trimStart(), trimEnd().

//trim()

let trimExample = "  g   "
console.log(trimExample);

/*The trim() will remove the any whitespace from the string 
it will not remove whitespace between words, just starting and end */
let try1 = trimExample.trim();

console.log(try1);

try1 = trimExample.trim();

console.log(try1);

//Lets see for sentence
let bigSentence = "This is a big sentence for and example with spaces";

try1 = bigSentence.trim();

console.log(try1);//No spaces will be removed from between 📉

//trimStart

//This method will remove the whitespace from the starting of the string
console.log("Example of trim start");
let bigSentence1 = "   This is a big sentence for and example with spaces   ";
console.log(bigSentence1);
try1 = bigSentence1.trimStart();

console.log(try1);

console.log("Example of trim End");

//trimEnd as the name suggest the whitespace in the end will be trimed
try1 = bigSentence1.trimEnd();

console.log(try1);
