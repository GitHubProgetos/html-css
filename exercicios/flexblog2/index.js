const navbarEl = document.querySelector(".menubg");

const bottomContainerEl = document.querySelector(".sobre");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 10
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});