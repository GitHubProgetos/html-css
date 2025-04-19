//gsap.to ESTADO INICIAL E VAI PARA O FINAL
/*
gsap.to('.box' , {
    //x: 100,//ou
    //x: '15%',//ou
    x: "30vw",
    background: "red",//ou
    //backgroundColor: "black",
    //scale: 2,
    //borderRadius: '50%',
    //borderRadius: 0,
    duration: 5,
    //opacity: 0
})
*/


//gsap.from ESTADO FINAL E VAI PARA O INICIAL
/*
gsap.from('.box' , {
    //x: 100,//ou
    //x: '15%',//ou
    x: "30vw",
    //background: "red",//ou
    backgroundColor: "black",
    //scale: 2,
    //borderRadius: '50%',
    //borderRadius: 0,
    duration: 5,
    //opacity: 0
})
*/


gsap.fromTo('.box' , {
   x: -200,
   y: 100,
   duration: 5
},{
    x: 100,
    y: -200,
    duration: 5,
    backgroundColor: "black",
    ease: "elastic.out(1.5, 0.3)"
})
