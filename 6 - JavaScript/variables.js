
console.log("Hello World!")
// This is a single line Comment
/*
    This is a multi line Comment
*/

// Variables
// let - block scope / mutable/changeable
// var - global scope / mutable/changeable
// const - block scope / unmutable/unchangable
let firstName = "John";
console.log("My first Name is ", firstName);

var lastName = "Doe";
console.log("My Last Name is ", lastName);

const birthday = "1 - 1 - 1999";
console.log("John Doe's birthday is ", birthday);

firstName = "Joshua";
console.log("My first Name is ", firstName);

// birthday = "02 - 02 - 2000";
// console.log("John Doe's birthday is ", birthday);

if(true){
    var email = "miko@gmail.com";
    let username = "Miko";
    console.log(username,email);
   }
   console.log(email);
   // console.log(username);