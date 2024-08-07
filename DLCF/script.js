// document.getElementById('lgn').addEventListener('click', function() {
//     document.querySelector('.lgn-background').style.display = 'flex';
// });

// document.getElementById('close').addEventListener('click', function() {
//     document.querySelector('.lgn-background').style.display = 'none';
// });

// Sign up function

// document.getElementById('sgn').addEventListener('click', function() {
//     document.querySelector('.sgn-background').style.display = 'flex';
// });

// document.getElementById('cancel').addEventListener('click', function() {
//     document.querySelector('.sgn-background').style.display = 'none';
// });

// Hamburgermenu

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.announce-modal').style.display = "flex";
})

document.querySelector('#remove').addEventListener('click', () => {
    document.querySelector('.announce-modal').style.display = "none";
})