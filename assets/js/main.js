"use strict";

const btns = document.querySelectorAll(".btn-container>button");
const [flexParent] = document.getElementsByClassName("flex-parent");
const flexChild = document.querySelectorAll(".flex-child");
const flexParent1 = document.querySelector(".flex-parent1");

// for (const btn of btns) {
//   btn.style.width = "150px";
//   btn.style.height = "50px";
//   btn.style.margin = "5px";
// }

// flexParent1.style.width = "650px";
// flexParent1.style.height = "220px";
// flexParent1.style.margin = "2px";
// flexParent1.style.padding = "2px";
// flexParent1.style.alignItems = "center";
// flexParent1.style.border = "2px solid aqua";

// flexParent.style.width = "630px";
// flexParent.style.height = "200px";
// flexParent.style.padding = "3px";
// flexParent.style.margin = "5px";
// flexParent.style.display = "flex";
// flexParent.style.alignItems = "center";
// flexParent.style.border = "1px dotted grey";

// for (const item of flexChild) {
//   item.style.width = "30px";
//   item.style.padding = "2px";
//   item.style.margin = "2px";
//   item.style.border = "0.5px solid grey";
//   item.style.textAlign = "center";
//   item.style.height = "99%";
//   item.style.width = "30px";
//   item.style.backgroundColor = "aqua";
// }

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
