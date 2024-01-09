var reply_click = function () {
  document.getElementById("list-item").style = "display:block";
};
document.getElementById("toggle").onclick = reply_click;
// $(window).resize(function () {
//     "use strict";
//     if ($(window).width() > 780) {
//         $('nav ul').removeAttr('style');
//     }
// });
{
  var acc = document.getElementsByClassName("accordiontitle");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  document.getElementById("defaultOpentwo").click();
}

//tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//slider-job
var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
if (screen.width > 990) {
  itemDisplay = document
    .getElementsByClassName("slider-container")[0]
    .getAttribute("item-display-d");
  margin = itemDisplay * 5;
}
if (screen.width > 700 && screen.width < 990) {
  itemDisplay = document
    .getElementsByClassName("slider-container")[0]
    .getAttribute("item-display-t");
  margin = itemDisplay * 6.8;
}
if (screen.width > 280 && screen.width < 700) {
  itemDisplay = document
    .getElementsByClassName("slider-container")[0]
    .getAttribute("item-display-m");
  margin = itemDisplay * 20;
}

var items = document.getElementsByClassName("joblist-card");
var itemleft = items.length % itemDisplay;
var itemslide = Math.floor(items.length / itemDisplay) - 1;
for (let i = 0; i < items.length; i++) {
  items[i].style.width = screen.width / itemDisplay - margin + "px";
}

function next() {
  if (inc !== itemslide + itemleft) {
    if (inc == itemslide) {
      inc = inc + itemleft;
      count = count - (screen.width / itemDisplay) * itemleft;
    } else {
      inc++;
      count = count - screen.width;
    }
  }
  slider.style.left = count + "px";
}

function prev() {
  if (inc !== 0) {
    if (inc == itemleft) {
      inc = inc - itemleft;
      count = count + (screen.width / itemDisplay) * itemleft;
    } else {
      inc--;
      count = count + screen.width;
    }
  }
  console.log(inc);
  slider.style.left = count + "px";
}
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
