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

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const rbb = document.querySelector(".rbb");

let quantity = 0;

function add(id) {
  quantity++;
  updateQuantity(id);
}

function sub(id) {
  if (quantity > 0) {
    quantity--;
    updateQuantity(id);
  }
}

function updateQuantity(id) {
  document.getElementById(id).innerText = quantity;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
