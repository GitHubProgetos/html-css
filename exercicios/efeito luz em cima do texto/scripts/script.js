
const luz = document.querySelector('.luz');

window.addEventListener('mousemove', (e) => {
    luz.style.setProperty('--x', e.clientX + 'px');
    luz.style.setProperty('--y', e.clientY + 'px');
});