
//now split text into letters
//agora dividido o texto em letras

let text = document.querySelector('.text');
let textContent = text.textContent;
text.textContent = '';
for (let i = 0; i < textContent.length; i++) {
    let span = document.createElement('span');
    span.textContent = textContent[i];
    text.appendChild(span);
}

//================================================//

let span = document.querySelectorAll('span');
let delay = 0;
for (let i = 0; i < span.length; i++) {
    span[i].style.animationDelay = delay + 's';
    delay += 0.1;
}

//========================//========================//


