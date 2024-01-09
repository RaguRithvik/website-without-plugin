var count1 = 0;
var inc1 = 0;
var margin1 = 0;
var slider1 = document.getElementsByClassName("slider-width1")[0];
var itemDisplay1 = 0;
if (screen.width > 990) {
  itemDisplay1 = document
    .getElementsByClassName("slider-container1")[0]
    .getAttribute("item-display-d");
  margin1 = itemDisplay1 * 5;
}
if (screen.width > 700 && screen.width < 990) {
  itemDisplay1 = document
    .getElementsByClassName("slider-container1")[0]
    .getAttribute("item-display-t");
  margin1 = itemDisplay1 * 6.8;
}
if (screen.width > 280 && screen.width < 700) {
  itemDisplay1 = document
    .getElementsByClassName("slider-container1")[0]
    .getAttribute("item-display-m");
  margin1 = itemDisplay1 * 20;
}

var items1 = document.getElementsByClassName("item");
var itemleft1 = items1.length % itemDisplay1;
var itemslide1 = Math.floor(items1.length / itemDisplay1) - 1;
for (let i1 = 0; i1 < items1.length; i1++) {
  items1[i1].style.width = screen.width / itemDisplay1 - margin1 + "px";
}

function next1() {
  if (inc1 !== itemslide1 + itemleft1) {
    if (inc1 == itemslide1) {
      inc1 = inc1 + itemleft1;
      count1 = count1 - (screen.width / itemDisplay1) * itemleft1;
    } else {
      inc1++;
      count1 = count1 - screen.width;
    }
  }
  slider1.style.left = count1 + "px";
}

function prev2() {
  if (inc1 !== 0) {
    if (inc1 == itemleft1) {
      inc1 = inc1 - itemleft1;
      count1 = count1 + (screen.width / itemDisplay1) * itemleft1;
    } else {
      inc1--;
      count1 = count1 + screen.width;
    }
  }
  console.log(inc1);
  slider1.style.left = count1 + "px";
}
