// DOM - DOCUMENT OBJECT MODEL
let elementWithTD = document.getElementById("first-div");
console.log(elementWithTD);
// Change the text content
elementWithTD.textContent = "Div 1";

const elementWithClass = document.getElementsByClassName("sample-div");
console.log(elementWithClass);
// Change the text content
elementWithClass[1].textContent = "Div 2";

let listItems = document.getElementsByTagName("li");
console.log(listItems);
listItems[0].style.color = "tomato";

let orderList = document.querySelector(".ordered-list");
console.log(orderList);
orderList.style.backgroundColor = "red";

//querySelectorAll
const headings = document.querySelectorAll("h3");
console.log(headings);
headings.forEach(function (heading) {
  heading.style.backgroundColor = "blue";
  heading.style.color = "white";
});

const day = document.getElementById("day-night-icon");
day.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Add Child Element
const parent = document.querySelector("#parent-element");
const child = document.createElement("div");
child.textContent = "Child Element";
parent.appendChild(child);

// Removing an element
const removed = document.getElementById("element-to-be-removed");
removed.remove();

//Event Listener
// let dark = document.querySelector("#dark-mode-btn");
// dark.addEventListener("click", function(){
//     const page = document.getElementById("page-container");
//     page.style.backgroundColor = "black";
//     page.style.color = "white";
//     let text = document.getElementById("page-mode-text");
//     text.textContent = "Dark Mode";
// });

let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  let pageContainer = document.getElementById("page-container");
  let pageModeText = document.getElementById("page-mode-text");
  if (darkModeBtn.textContent == "Dark Mode") {
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    pageModeText.textContent = "Dark Mode";
    darkModeBtn.textContent = "Light Mode";
  } else {
    pageContainer.style.backgroundColor = "white";
    pageContainer.style.color = "black";
    pageModeText.textContent = "Light Mode";
    darkModeBtn.textContent = "Dark Mode";
  }
});
