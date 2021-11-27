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

// 3 : make text of the first card red on clicking edit

let entireCard = document.getElementsByClassName("card mb-4 box-shadow")[0];
let editButton = document.getElementsByClassName(
  "btn btn-sm btn-outline-secondary"
)[0];

redEdit = () => {
  entireCard.style.color = "red";
};

editButton.addEventListener("click", redEdit);
