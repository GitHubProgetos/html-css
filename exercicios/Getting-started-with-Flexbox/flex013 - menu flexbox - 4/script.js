/*
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
*/

document.addEventListener("DOMContentLoaded", (event) => {
    const tl = gsap.timeline({ duration: 0.9 });

    tl.fromTo('h1' , {
        opacity: 0,
        x: -20
        //scale: 0,
    },{
        opacity: 1,
        x: 0,
        //scale: 1,
        duration: 0.7
    }).fromTo('.wrapper .card' , {
        opacity: 0,
        x: 20,
    }, {
        opacity: 1,
        x: 0,
        stagger: 0.3, 
    },).fromTo('.main' , {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5
    })



});