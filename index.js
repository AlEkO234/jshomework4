const title = document.querySelector('.title');
const img = document.querySelector('img')

title.style.fontSize = '30px'
title.style.color = 'red'
img.style.width = '700px'

const container = document.querySelectorAll('.container');

container.forEach((el) => {
    el.innerHTML = "<p class=“text”> hello </p>"
});

const box = document.querySelector('.box');

const aElement = document.createElement('a');
aElement.href = 'https://google.com'
aElement.target = '_blank'
aElement.innerHTML = 'google link'
aElement.classList.add('newclass')
box.appendChild(aElement);