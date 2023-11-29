let container = document.querySelector(".container");
let slider = document.querySelector("#myRange");

window.addEventListener("load", () => {
  initialize();
  color();
})
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
      smallDiv.classList.add("grid");
      smallDiv.classList.add("white");
      smallDiv.style.cssText = `width : ${width}px; height : ${height}px`;
      container.appendChild(smallDiv);
    }
  }
  color();
}

function color() {
  let grids = document.querySelectorAll(".grid");
  console.log(grids);
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", function () {
      grid.classList.add("black");
    });
  });
}

slider.addEventListener("input", initialize);

let reset = document.querySelector("#reset");

reset.addEventListener("click", clear);

function clear() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.classList.remove("black");
  });
}
