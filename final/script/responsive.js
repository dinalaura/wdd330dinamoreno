const button = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

button.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);