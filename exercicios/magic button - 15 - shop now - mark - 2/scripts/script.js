
const botao = document.getElementById('botao');
const som = document.getElementById('som');

botao.addEventListener('mouseover', () => {
  som.play();
});

botao.addEventListener('mouseout', () => {
  som.play();
});