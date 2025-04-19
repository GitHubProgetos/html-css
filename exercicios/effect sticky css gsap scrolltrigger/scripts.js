

 
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  const areas = gsap.utils.toArray(".area")

  areas.forEach((area) => {
      gsap.to(area, {
          scale: 0.9,
          duration: 2,
          scrollTrigger: {
              trigger: area,
              start: "top center",
              end: "bottom center",
              scrub: true,
              //markers: true
          }
      })
  })
  
 });

