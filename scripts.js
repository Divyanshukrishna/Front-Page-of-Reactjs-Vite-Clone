let count = 0; 
let countBtn = document.querySelector('.count-button');
let countSpan = document.querySelector('#numberInc');

countBtn.addEventListener('click', () => {
    count++; 
    countSpan.innerHTML = count; 
});
