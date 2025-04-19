

 
 document.addEventListener("DOMContentLoaded", (event) => {
    const tl = gsap.timeline({ duration: 1});
    const tl2 = gsap.timeline({ duration: 1});

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
    },'-=0.5');/*OBS*///Delay

    tl2.fromTo('.s-hero.robot ', {
        opacity: 0,
        y: 20,
    },  {
        opacity: 1,
        duration: 1,
        y: 0,
    }).fromTo('.desciption', {/*.s-hero .left-container*/ 
        opacity: 0,
        x: -20,
    }, {
        opacity: 1,
        x: 0,
    }, 
).fromTo('.second-container ul li',{
        opacity: 0,
        y: 20,
        
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.3
        
    }).fromTo('.we-robot' , {
        opacity: 0,
        x: 20,
    }, {
        opacity: 1,
        x: 0,
    }).fromTo('.circle' , {
        opacity: 0,
        scale: 0,
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.5
    }).fromTo('.lauch' , {
        opacity: 0,
        scale: 0,
    },{
        opacity: 1,
        scale: 1,
        duration: 0.5
    })  

 });
