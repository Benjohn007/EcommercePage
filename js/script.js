const sideBar = document.querySelector('aside');
const menuBtn = document.querySelector('#menubtn');
const closeBtn = document.querySelector('#closeBtn');
const themeToggler = document.querySelector('.theme-toggler');


menuBtn.addEventListener('click', () => {
	sideBar.style.display = 'block'
});
closeBtn.addEventListener('click', () => {
	sideBar.style.display = 'none'
});

// sideBar.querySelector('.sideBar').classList.toggle('active');

themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variable');
});
themeToggler.querySelector('i').classList.add('active');
themeToggler.querySelector('i').classList.add('active');