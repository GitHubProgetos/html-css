
// Adicione o seguinte código JavaScript para tocar o som quando a página for carregada
/*
window.onload = function() {
  document.getElementById("sound").play();
  console.log("Tocando o som");
};
*/
document.addEventListener("DOMContentLoaded", function() {
  console.log("Página carregada");
  document.getElementById("sound").play();
});