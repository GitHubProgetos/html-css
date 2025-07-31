
const words = document.querySelectorAll('.word');
const highlight = document.querySelector('.highlight-box');

function moveHighlightTo(el) {
  const rect = el.getBoundingClientRect();
  const containerRect = el.parentElement.getBoundingClientRect();

  highlight.style.width = `${rect.width}px`;
  highlight.style.height = `${rect.height}px`;
  highlight.style.transform = `translate(${rect.left - containerRect.left}px, ${rect.top - containerRect.top}px)`;
}

words.forEach((word) => {
  word.addEventListener('mouseenter', () => {
    words.forEach(w => w.classList.remove('active'));
    word.classList.add('active');
    moveHighlightTo(word);
  });
});

// Inicializa na palavra ativa
const active = document.querySelector('.word.active');
moveHighlightTo(active);
