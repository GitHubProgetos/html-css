

let btn = document.getElementById("btn")//pega o botão

btn.addEventListener("click", (e) => {//evento de click

    let rect = btn.getBoundingClientRect()/*pega a posição do botão*/
    let x = e.clientX - rect.left/*pega a posição x do mouse*/
    let y = e.clientY - rect.top/*pega a posição y do mouse*/

    let numParticles = 20 /*quantidade de particulas*/

    for (let i = 0; i < numParticles; i++) {//cria as particulas
        createParticle(x, y)
    }

    function createParticle(x, y) {//cria a particula
        let particle = document.createElement("div")
        particle.classList.add("particle")
        particle.style.left = x + "px"
        particle.style.top = y + "px"

        let angle = Math.random() * 2 * Math.PI//angulo aleatorio
        let distance = Math.random() * 80 + 20//distancia aleatoria
        let tx = Math.cos(angle) * distance//velocidade x
        let ty = Math.sin(angle) * distance//velocidade y

        particle.style.setProperty("--tx", tx + "px")//velocidade x
        particle.style.setProperty("--ty", ty + "px")//velocidade y

        btn.appendChild(particle)//coloca a particula no botão

        setTimeout(() => {//remove a particula
            particle.remove()
        }, 1000)
    
    }


  
})