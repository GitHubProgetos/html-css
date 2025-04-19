//gsap.to(".quadrado", {x: 300, duration: 2, ease: "elastic.out(1, 0.3)"})

//gsap.to ESTADO INICIAL E VAI PARA O FINAL
//gsap.from ESTADO FINAL E VAI PARA O INICIAL

/*
gsap.to(".quadrado", {
    x: 300,
    duration: 3,
    ease: "elastic.out(1, 0.3)",
    backgroundColor: "rgba(255, 255, 255, .2)",
    borderRadius: "50%",
    opacity: 0
})
*/


/*
gsap.from(".quadrado", {
    x: 300,
    duration: 3,
    ease: "elastic.out(1, 0.3)"
    //backgroundColor: "rgba(255, 255, 255, .2)",
    //borderRadius: "50%"
    //opacity: 0
})
*/


gsap.fromTo(".quadrado", {
    x: -500,
    y: 100
}, {
    x: 100,
    y: -200,
    duration: 3,
    //ease: "elastic.out(1, 0.3)"
})

