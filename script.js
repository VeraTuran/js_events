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

let firstEntireCard = document.getElementsByClassName(
  "card mb-4 box-shadow"
)[0];
let firstEditButton = document.getElementsByClassName(
  "btn btn-sm btn-outline-secondary"
)[0];

redEdit = () => {
  firstEntireCard.style.color = "red";
};

firstEditButton.addEventListener("click", redEdit);

// 4 : make text on the second card green on clicking edit

let secondEntireCard = document.getElementsByClassName(
  "card mb-4 box-shadow"
)[1];
let secondEditButton = document.getElementsByClassName(
  "btn btn-sm btn-outline-secondary"
)[1];

greenEdit = () => {
  if (secondEntireCard.style.color === "green") {
    secondEntireCard.style.color = "";
  } else secondEntireCard.style.color = "green";
};

secondEditButton.addEventListener("click", greenEdit);

// 5 : deactivate a link tag (bootstrap)

// let navbar = document.getElementsByClassName("navbar")[0];
// let cdnLink = document.getElementsByTagName("link")[0];

// toggleCdn = () => {
//   if (
//     cdnLink.href ===
//     "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//   ) {
//     cdnLink.href = "";
//   } else
//     cdnLink.href =
//       "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
// };

// navbar.addEventListener("dblclick", toggleCdn);

let navbar = document.getElementsByClassName("navbar")[0];
let styleSheet = document.styleSheets[0];

function toggleStyleSheet() {
  if (styleSheet.disabled === true) {
    styleSheet.disabled = false;
  } else styleSheet.disabled = true;
}

navbar.addEventListener("dblclick", toggleStyleSheet);

// 6 : reduce image size and hide text
// 7 : shuffle cards forwards
// 8 : shuffle cards backwards
// 9 : *BONUS* key shenanigans
