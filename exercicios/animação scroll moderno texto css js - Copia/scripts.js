//1 fase do código criação dos spans

let textElement = document.querySelector(".text");//Variável para armazenar o     class text
let textContent = textElement.textContent;//Variável para armazenar o conteúdo do parágrafo

textElement.textContent = "";//Limpa o conteúdo do parágrafo

for(let char of textContent){
    let span = document.createElement("span");
    span.textContent = char;//Pegando cada letra e armazenando no span
    textElement.appendChild(span);//Adicionando o span criado ao parágrafo
}//Estrutura de repetição que Cria um elemento span para cada letra

//2 fase do código animação

let spans = document.querySelectorAll(".text span");//Seleciona todos os span criados

window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;//Variável para armazenar a distância que o usuário rola a página

    spans.forEach((span, index) => {
        if(scrollDistance >= (index + 1) * 10){//
            span.classList.add("active");//Adiciona a classe active ao span
        } else {
            span.classList.remove("active");//Remove a classe active ao span
        }
    })


})//Função que é executada quando o usuário rola a página


