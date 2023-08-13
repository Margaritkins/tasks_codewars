"use strict";

const btns = document.querySelectorAll(".btn-container>button");
const [flexParent] = document.getElementsByClassName("flex-parent");
const flexChild = document.querySelectorAll(".flex-child");
const flexParent1 = document.querySelector(".flex-parent1");

// 

for (const btn of btns) {
  btn.addEventListener("click", (event) => {
    flexParent.style.flexDirection = event.target.dataset.flexDirection;

    for (const btn of btns) {
      btn.style.color = "";
      btn.style.backgroundColor = "";
      // console.log(event.target.style);
    }
    event.target.style.color = "white";
    event.target.style.backgroundColor = "aqua";
  });
}
