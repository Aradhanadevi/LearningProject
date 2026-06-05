//Today we will learn about null, undefined and switch statement

//Null and undefined

//Null is a value that represents the absence of any object value. It is often used to indicate that a variable has no value or that an object property is empty. For example:

let myVariable = null;
console.log(myVariable); // Output: null

//Undefined is a value that represents the absence of a value. It is the default value of variables that have been declared but not initialized. For example:

let myOtherVariable;
console.log(myOtherVariable); // Output: undefined

//Lets see if null and undefined are equal

console.log(null == undefined); // Output: true

//However, they are not strictly equal
console.log(null === undefined); // Output: false

// below are some examples of how null and undefined behave in comparisons

console.log(null >= 0); // Output: true
console.log(null > 0); // Output: false
console.log(undefined >= 0); // Output: false
console.log(undefined > 0); // Output: false

//Switch statement

//The switch statement is a control flow statement that allows you to execute different code blocks based on different conditions. It is often used as an alternative to if-else statements when you have multiple conditions to check. The syntax of a switch statement is as follows:

let weekday = "1";
switch (weekday) {
  case "1":
    console.log("Today is Monday");
    break;
  case "2":
    console.log("Today is Tuesday");
    break;
  case "3":
    console.log("Today is Wednesday");
    break;
  case "4":
    console.log("Today is Thursday");
    break;
  case "5":
    console.log("Today is Friday");
    break;
  case "6":
    console.log("Today is Saturday");
    break;
  case "7":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}


/*The if else can be used for complex conditions
whereas switch is used for simple conditions where you are 
checking the value of a variable against a set of possible values. 
The switch statement can be more concise and easier to read than
a series of if-else statements when you have many conditions to 
check. However, it is important to note that the switch statement
only works with primitive values (such as strings, numbers, and booleans)
and cannot be used with complex data types (such as objects and arrays).
*/