// Arithmetic Operators
let num1 = 5;
let num2 = 10;
console.log("Addition (+):", num1 + num2);
console.log("Subtration (-)", num2 - num1);
console.log("Multiplicationn (*)", num1 * num2);
console.log("Division (/)", num2 / num1);
console.log("Remainder/Modulo (%)", num2 % num1);
console.log("Exponent (**)", num2 ** num1);

//PEMDAS - Parenthesis / Exponent / MULTIPLICAITON/DIVISION / ADDITION/ SUBTRACTION
let result = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("This is the result of PEMDAS :", result);

let greet = "Hi!";
let myName = "Miko";

//Concatination
console.log(greet + myName + " I am your Instructior for today.");

//Comparison Operators
//produces True or False / Boolean Data Types
//Equal to
console.log("Equal (==)", 5 == 5);
//Not Equal
console.log("Not Equal (!=)", 5 != 4);
//Stictly Equal
console.log("Strictly Equal (===)", "5" === 5);
//Stictly Not Equal
console.log("Strictly Not Equal (!==)", "5" !== 4);

console.log("Greater Than(>):", 5 > 3);
console.log("Less Than(>):", 5 < 3);
console.log("Greater Than or Equal to (>=):", 5 >= 3);
console.log("Less Than or Equal to (<=)", 5 <= 3);

// Logical Operators
// && - AND - Amphersand
// || - OR - Pipe
// ! = NOT -Exclamation Mark
let sunny = true;
let warm = true;
console.log("Is it Sunny and Warm?", sunny && warm);
console.log("Is it Sunny Or Warm?", sunny || warm);
console.log("Is it not Sunny?", !sunny);

// Assignment Addition (+=)
let num3 = 10;
let num4 = 5;
num3 += num4;
console.log("The new value of the num3 is:", num3);
// Assignment Subtraction (-=)
num3 -= num4;
console.log("The new value of the num3 is:", num3);
// Assignment Multiplication (*=)
num4 *= num3;
console.log("The new value of the num4 is:", num4);
// Assigment Division (/=)
num3 /= num4;
console.log("The new value of the num3 is:", num3);
// Assignemnt Remainer/Modulo (%=)
num4 %= num3;
console.log("The new value of the num4 is:", num4);
// Assignment Exponent (**=)
num4 **= num3;
console.log("The new value of the num4 is:", num4);
