// Today we will learn about if a string contains a substring.

let str = "Hello world today we will lean javascript";

console.log(str.includes("will")); //Will get true or false as result out of includes method.

console.log(str.includes("Javascript")); //This will be false as it if false.

//The answers will be true in the above code.

//we can use slice method to extract substring from the string and will return a new string.

let strr = "This is a big sentence, I want to use its as example."

console.log(strr.slice(6)); //here slice method has 2 args.

//First args will be the index from where u want to pick up string.
/*
Second args will br the index from where u want to end 
string and if u dont put the second arg as its optional
*/
console.log(strr.slice(4, 8));

/*
If entred -ve index it will put string in reverse
*/

let demo = "This is javascript tutorial.";
  
let demo1 = demo.slice(-9);

console.log(demo1);

let demo2 = "Man I am reading webotoon";
  
let demo3 = demo2.slice(-9, -1);

console.log(demo3);