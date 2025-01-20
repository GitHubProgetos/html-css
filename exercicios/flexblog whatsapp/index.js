//const navbarEl = document.querySelector(".menubg");

//const bottomContainerEl = document.querySelector(".sobre");

//console.log(navbarEl.offsetHeight);

//console.log(bottomContainerEl.offsetTop);
/*
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
*/

const content = document.querySelector('[data-shrink="yes"]');

const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add('aparecer');

setInterval(function() {
  content.classList.toggle('shrink');
  //content.classList.add('shrink');
}, 5000);

setTimeout(function() {
  setInterval(function() {
    span.classList.toggle('aparecer');
    //content.classList.add('shrink');
  }, 5000); 
}, 200);

