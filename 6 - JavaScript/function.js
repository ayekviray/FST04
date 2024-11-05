//Conditional Statements
let temperature = 25;
if (temperature < 0) {
  console.log("It's Freezing!");
} else if (temperature <= 0) {
  console.log("It is cool outside.");
} else if (temperature <= 0 && temperature == 25) {
  console.log("It is cloudy outside.");
} else {
  console.log(" It is a hot weather outside!");
}

// Looping Statement
// 1st : Variable Initialization
// 2nd : Condition Expression
// 3rd : Increment
for(let i=0; i<=3;i++) {
    console.log("For Loop:",i);
   }

//Function
function greet() {
    console.log("Hello, Welcome to the World of Functions");
  }
  greet();
  greet();
  greet();
  greet();
  greet();
  function sum(num1, num2) {
    console.log("We have used the paramater(arguments)");
    return num1 + num2;
  }
  console.log(sum(5, 10));
  function product(multiplier, multiply) {
    return multiplier * multiply;
  }
  console.log(product(10, 10));