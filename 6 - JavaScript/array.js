//Arrays
let fruits = [
  "Banana",
  "Apple",
  "Pear",
  "Orange",
  "Passionfruit",
  "Mango",
  "Grape",
  "Kiwi",
  "Watermelon",
  "Dragon fruit",
];
console.log("The fruits available is:", fruits);
//array length = .length
console.log("Fruits Length:", fruits.length);

//accessing the array index
console.log("First Fruit is:", fruits[0]);
console.log("Last Fruit is:", fruits[fruits.length - 1]);

//Adding array elements
//.push method
fruits.push("Berry");
console.log("Updated Fruits:", fruits);
console.log("Last Fruit is:", fruits[fruits.length - 1]);

//Deleting array elements
//.pop method
fruits.pop();
console.log("new Updated Fruits:", fruits);

//Searching elements
//.includes() method
console.log("Is Mango available?", fruits.includes("Mango"));

//Looping inside the array
//.forEach()
fruits.forEach(function (fruit) {
  console.log("Fruits:", fruit);
});
