const navToggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector(".navbar-collapse");
const btnClose = document.querySelector(".btn-close");
navToggler.addEventListener("click", () => {
  navCollapse.classList.add("showNav");
});

btnClose.addEventListener("click", () => {
  navCollapse.classList.remove("showNav");
});
