
document.addEventListener("DOMContentLoaded", () => {

    const audio = new Audio("sounds/click.mp3");
    const bottons = document.querySelector(".btn");

    bottons.addEventListener("click", () => {
        audio.play();
    });
   
});

/*
document.addEventListener("DOMContentLoaded", () => {

    const audio = new Audio("sounds/click.mp3");
    const bottons = document.querySelector(".btn");

    bottons.addEventListener("mouseover", () => {
        audio.play();
    });

    bottons.addEventListener('mouseout', () => {
        audio.play();
});
   
});
*/