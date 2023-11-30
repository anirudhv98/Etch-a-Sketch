let container = document.querySelector(".container");
let slider = document.querySelector("#myRange");
let blackbtn = document.querySelector("#black");
let rgbbtn = document.querySelector("#rgb");

window.addEventListener("load", () => {
  initialize();
  blackColor();
});
function initialize() {
  clear();
  container.innerHTML = "";
  let limit = slider.value;
  console.log(limit);
  let width = 640 / limit;
  let height = 640 / limit;
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      let smallDiv = document.createElement("div");
      smallDiv.style.width = `${width}px`;
      smallDiv.style.height = `${height}px`;
      smallDiv.style.background = "white";
      smallDiv.classList.add("grid");
      container.appendChild(smallDiv);
    }
  }
  blackColor();
}

function blackColor() {
  clear();
  console.log("btn called");
  let grids = document.querySelectorAll(".grid");
  console.log(grids);
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", function () {
      grid.style.background="black";
    });
  });
}

function randomColor() {
  clear();
  let grids = document.querySelectorAll(".grid");
  console.log(grids);
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", function () {
      grid.classList.remove("black");
      let a = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let c = Math.floor(Math.random() * 256);
      console.log(a);
      console.log(b);
      console.log(c);
      grid.style.background = `rgb(${a},${b},${c})`;
    });
  });
}

blackbtn.addEventListener("click",blackColor);
slider.addEventListener("input", initialize);
rgbbtn.addEventListener("click",randomColor);
let reset = document.querySelector("#reset");

reset.addEventListener("click", clear);

function clear() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.classList.add("white");
    grid.classList.remove("black");
    grid.style.background = "white";
  });
}
