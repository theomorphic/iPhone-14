const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');


// функция, чтобы при клике к наву добавлялся класс
btn.addEventListener('click', ()=>{
	nav.classList.toggle('menu-open');
});