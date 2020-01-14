// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', event => {
    console.log('mouseovered');
    nav.style.backgroundColor = 'red' ;
})


const body = document.querySelector('body');
let i = 0;
document.addEventListener('keydown', event => {
    console.log('keydowned');
    if(Math.random() > 0.5 && i === 0) {
        body.style.backgroundColor = 'turquoise';
    } else {
        body.style.backgroundColor = 'pink';
    }
    i++
})

const password = document.querySelector('input[type="password"]');
console.log(password);
password.addEventListener('focus', event => {
    console.log('focused');
    password.style.backgroundColor = 'blue' ;
})

const header = document.querySelector('header');
window.addEventListener('resize', event => {
    console.log('resized');
    header.style.backgroundColor = 'orange' ;
})

window.addEventListener('scroll', event => {
    console.log('scrolled');
    header.style.backgroundColor = 'gray' ;
})

document.addEventListener('wheel', event => {
    console.log('wheeled');
    document.querySelector('.logo-heading').style.fontSize = '50px' ;
})

const text = document.querySelector('input[type=text]');
text.addEventListener('select', event => {
    console.log('selected');
    text.style.width = '420px' ;
    text.style.color = 'red' ;
})

header.addEventListener('dblclick', event => {
    console.log('mouseovered');
    header.style.backgroundColor = 'red' ;
})

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });