
document.addEventListener("DOMContentLoaded", (event) => {
    const tl = gsap.timeline({ duration: 0.9 });

    tl.fromTo('.wrapper .card' , {
        opacity: 0,
        x: 20,
    }, {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        }).fromTo('.main' , {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.9
        })



});