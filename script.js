// 1 : footer logs "click" in the console when clicked

let footerDiv = document.getElementsByTagName("footer")[0];
let clickCounter = 0;

onFooterClick = () => {
  clickCounter++;
  console.log("footer clicked", clickCounter, "times!");
};

footerDiv.addEventListener("click", onFooterClick);

// 2 : toggle hamburger menu

let hamburger = document.getElementsByClassName("navbar-toggler")[0];
let fullHeader = document.getElementById("navbarHeader");

menuCollapse = () => {
  fullHeader.classList.toggle("collapse");
};

hamburger.addEventListener("click", menuCollapse);

// 3 : 
