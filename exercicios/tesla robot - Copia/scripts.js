

 
 document.addEventListener("DOMContentLoaded", (event) => {
    const tl = gsap.timeline({ duration: 0.7 });
    const tl2 = gsap.timeline({ duration: 0.7 });

    tl.fromTo('header .left', {
        opacity: 0,
        x: -20,
    }, {
        opacity: 1,
        x: 0,
    }).fromTo('header nav button', {
        opacity: 0,
        x: 20,
    }, {
        opacity: 1,
        x: 0,
        stagger: 0.3,//Entra na tela um elemento atrás do outro
    },  '-=0.5');/*OBS*///Delay

    tl2.fromTo('.s-hero.robot ', {
        opacity: 0,
        y: 20,
    },  {
        opacity: 1,
        duration: 1,
        y: 0,
    }).fromTo('.desciption', {
        opacity: 0,
        x: -20,
    }, {
        opacity: 1,
        x: 0,
    }, '-=0.5').fromTo('.second-container ul li',{
        opacity: 0,
        y: 20,
        
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.3
        
    });  

 });
