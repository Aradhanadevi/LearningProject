//Today we will learn about the operator precedence

//Operator precedence is when and where to start the operations from where to calculate.


let ex1 = 5 + 3 * 2; //Here the answer will be 11 because the multiplication will be done first and then addition will be done.
let ex2 = (5 + 3) * 2; //Here the answer will be 16 because the addition will be done first and then multiplication will be done.

console.log(ex1);
console.log(ex2);

//division and multiplication have higher precedence than addition and subtraction. So they will be calculated first before addition and subtraction.

let ex3 = 10 - 5 + 2 * 3;   
//Here the answer will be 11 because the multiplication will be done first and then addition and subtraction will be done from left to right.

let ex4 = 10 - (5 + 2) * 3; 
//Here the answer will be -11 because the addition will be done first and then multiplication will be done and then subtraction will be done.

// % (modulus) operator has the same precedence as multiplication and division. So it will be calculated at the same time as multiplication and division.

let ex5 = 10 % 3 + 2 * 4; 
//Here the answer will be 11 because the modulus will be calculated first and then multiplication will be calculated and then addition will be calculated.

console.log(ex3);
console.log(ex4);
console.log(ex5);

//Now we will learn about the associativity of operators. Associativity is the order in which operators of the same precedence are evaluated.

let ex6 = 10 - 5 + 2;
//Here the answer will be 7 because the subtraction and addition have the same precedence and they will be evaluated from left to right.
let ex7 = 10 / 2 * 3;
//Here the answer will be 15 because the division and multiplication have the same precedence and they will be evaluated from left to right.            
console.log(ex6);
console.log(ex7);

//Now we will learn about prefix and postfix operators. Prefix operators are evaluated before the operand and postfix operators are evaluated after the operand.

let a = 5;
let b = a++;    
//Here the value of b will be 5 because the postfix operator will be evaluated after the operand and then a will be incremented to 6.

let c = ++a;    
//Here the value of c will be 7 because the prefix operator will be evaluated before the operand and then a will be incremented to 7.
console.log(b);
console.log(c);

//The prefre and postefix operators can be used with any operator and they will have the same precedence as the operator they are used with.

let d = 10;
let e = d++ * 2; 
//Here the value of e will be 20 because the postfix operator will be evaluated after the operand and then d will be incremented to 11.
let f = ++d * 2; 
//Here the value of f will be 24 because the prefix operator will be evaluated before the operand and then d will be incremented to 12.
console.log(e);
console.log(f);