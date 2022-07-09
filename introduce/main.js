const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});