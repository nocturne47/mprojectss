const navbar = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menuItem");
const stacked = document.querySelector(".stacked");
const close = document.querySelector("#close");
const hamburger = document.querySelector("#hamburger");

function toggleMenu() {
  if (navbar.classList.contains("showMenu")) {
    navbar.classList.remove("showMenu");
    close.style.display = "none";
    hamburger.style.display = "block";
  } else {
    navbar.classList.add("showMenu");
    close.style.display = "block";
    hamburger.style.display = "none";
  }
}

stacked.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
