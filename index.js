const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   if (hasClass) {
//     title.classList.remove(CLICKED_CLASS);
//   } else {
//     title.classList.add(CLICKED_CLASS);
//   }
// }

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }

// init();

// function handleOffline() {
//   console.log("lalala");
// }

// function handleOnline() {
//   console.log("fuck yeah");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

// if (10 === "10") {
//   console.log("hi");
// } else if (10 === 10) {
//   console.log("hlalala");
// } else {
//   console.log("hohoho");
// }

// const age = prompt("How old are you");
// if (age >= 18 && age <= 21) {
//   console.log("you can drink but you shold not");
// } else if (age > 21) {
//   console.log("go ahead");
// } else {
//   console.log("you cant");
// }

// console.log("Im Working Im JS Im Beautiful Im worth it");

// const a = 221;
// let b = a - 5;
// console.log(a > 4);
// console.log(b, a);

// String
// const what = "Nicolas";

// Blooean
// const wat = true;

//Number
// const wat = 666;

// Float 소수점
// const wat = 55.1;

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(daysOfWeek);
// console.log(daysOfWeek[0]);

// function sayHello(name, age) {
//   return `Hello ${name} you are ${age} years old`;
// }

// const greeting = sayHello("KIM", 18);
// console.log(greeting);

// const title = document.getElementById("title");
// console.dir(title);
// console.dir(document);

// title.innerHTML = "look at that";
// title.style.color = "blue";

// document.title = "Oops";

// function handleResize() {
//   console.log("I have been resized");
// }

// window.addEventListener("resize", handleResize);

// function handleResize(event) {
//   console.log(event);
// }

// function handleClick() {
//   title.style.color = "red";
// }
// title.addEventListener("click", handleClick);

// const title2 = document.querySelector(".aaa");
// function handleClick2() {
//   title.style.color = "yellow";
// }

// title2.addEventListener("click", handleClick2);
