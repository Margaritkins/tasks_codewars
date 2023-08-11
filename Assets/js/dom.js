"use strict";

// const title = document.querySelector("h1");
// const liArr = document.querySelectorAll(".list-item");
// const p = document.querySelector("p");

// title.style.color = "violet";
// title.style.fontSize = "20px";
// liArr.forEach((li) => {
//   li.style.display = "inline-block";
//   li.style.backgroundColor = "pink";
// });

// p.style.color = "blue";

// const btn = document.querySelector("button");
// // console.log(btn);
// let count = 0;
// function counter() {
//   if (count >= 1) {
//     btn.removeEventListener("click", counter);
//   } else {
//     count++;
//     return console.log(count);
//   }
// }
// btn.addEventListener("click", counter);

// const btns = document.querySelectorAll(".btns");
// btns.forEach((btn) => {
//   btn.addEventListener("click", counter);
// });

// // console.log(btns);
// p.addEventListener("click", function (event) {
//   event.target.style.color = "yellow";
// });

// btns.forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     event.target.remove();
//   });
// });
const divWrwapper = document.querySelector('.wrapper');
// console.log(divWrwapper);

const divScore = document.querySelector('.score');
divScore.textContent = 0;

const button = document.querySelector('.wrapper> button');

let counter = 0;
function count(){
  counter++;
  divScore.textContent = counter;
  // return counter;
}
button.addEventListener('click', count);
