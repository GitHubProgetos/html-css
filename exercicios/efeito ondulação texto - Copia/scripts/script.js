
//now split text into letters
//agora dividido o texto em letras

const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');

for (let i=0; i<element.length; i++) {
    element[i].style.animationDelay = i*0.07 + 's';
}