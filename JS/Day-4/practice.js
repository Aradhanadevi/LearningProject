//Tody I learned about template literals and string interpolation.

/*template literals are a new feature in js that allows us to create
strings in a more convenient way.They are enclosed by backticks(`) instead of single or
double quotes. They also allow us to use string interpolation, which is a way to 
embed expressions inside a string.*/

let name = "Aradhana";
let age = 20;

console.log(`Hello, my name is $(name) and I am $(age) years old.`); //This is string interpolation, it will replace the variables with their values and output the result in a string.

/*We can create a template literil of multiple lines 
without using \n andwe would not have to use +, in this we can use "  and '*/

console.log(`I am going to pretend that I am writing 
    something important. See here you can use "double quotes" and
    'single quotes' without any problem. Also this will print this statemet as it is 
    without using backslash n and +. 
    `)

//Now we will learn about substring and how to find its postion

let str = "Hello, my name is Aradhana and I am 20 years old."; //This is a string and it is made up of characters and its starting index is 0

console.log(str.indexOf("Aradhana")); //This will return the index of the first occurrence of the substring "Aradhana" in the string str, which is 18

//Also you can specify from where you want it to start searching.

console.log(str.indexOf("a", 20)); //This will return the index of the first occurrence of the substring "a" in the string str, starting from index 20, which is 28

//If the substring is not found, it will return -1
console.log(str.indexOf("Aradhana", 30)); //This will return -1 because there is no occurrence of the substring "Aradhana" in the string str starting from index 30


//Now we will see how to get input from users

//For that we will use prompt()

//To get input from users we can use prompt() function, it will show a dialog box to the user and ask for input, and it will return the input as a string.
//There is prompt.html in day 4 folder refor to that fro prompt()
 
