'use strict'

const title = document.querySelector('h1');
const liArr = document.querySelectorAll('.list-item');
const p = document.querySelector('p');

title.style.color = 'violet';
title.style.fontSize = '20px';
liArr.forEach((li) => {
li.style.display = 'inline-block';
li.style.backgroundColor = 'pink'
});

p.style.color = 'blue';



