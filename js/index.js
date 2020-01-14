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
    console.log('resizeed');
    header.style.backgroundColor = 'orange' ;
})
