//Functions, arrow functions, global scope, local scope, block scope.

//Function declaration
function add(a, b) {
    return a + b;
}

//Function expression
const subtract = function(a, b) {
    return a - b;
}

//Arrow function
const multiply = (a, b) => a * b;
//Global scope
let globalVar = "I am a global variable";
function testScope() {
    console.log(globalVar);
    let localVar = "I am a local variable";
    console.log(localVar);
}
testScope();
//console.log(localVar); // This will throw an error because localVar is not defined in the global scope
//Block scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar);
}   
//console.log(blockVar); // This will throw an error because blockVar is not defined outside the block
