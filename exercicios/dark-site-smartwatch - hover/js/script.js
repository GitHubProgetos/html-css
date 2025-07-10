
const menu = document.querySelector('.menu');
  const hoverLine = document.querySelector('.hover-line');
  const items = document.querySelectorAll('.menu ul li a');

  items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const coords = item.getBoundingClientRect();
      const menuCoords = menu.getBoundingClientRect();
      hoverLine.style.width = `${coords.width}px`;
      hoverLine.style.left = `${coords.left - menuCoords.left}px`;
    });

    item.addEventListener('mouseleave', () => {
      hoverLine.style.width = `0`;
    });
  });