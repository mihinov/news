let header = document.querySelector('.header');
let scrollPrev = 0;

document.addEventListener('scroll', () => {
	let scrolled = window.pageYOffset;
	if (scrolled > 100 && scrolled > scrollPrev) {
		header.classList.add('off');
	} else {
		header.classList.remove('off');
	}
	scrollPrev = scrolled;
});

let header__burger = document.querySelector('.header__burger');
let burger__menu = document.querySelector('.burger__menu');
let header__container = document.querySelector('.header__container');
let container = document.querySelector('.container');
let header__logo = document.querySelector('.header__logo');

function fuckCalc() {
	let paddingContainer = window.getComputedStyle(container, null).padding;
	paddingContainer = parseFloat(paddingContainer.slice(4, 6)*2);
	let widthContainer = container.offsetWidth - header__burger.offsetWidth - paddingContainer;
	if (header__container.classList.contains('active')) {
		header__burger.style.marginLeft = widthContainer + 'px';
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		} else {
		    document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = '17px';
		}
	} else {
		header__burger.style.marginLeft = '0';
		document.body.style.overflow = 'auto';
		document.body.style.paddingRight = '0px';
	}
}

header__burger.addEventListener('click', () => {
	header__container.classList.toggle('active');
	fuckCalc();
});

window.addEventListener('resize', () => {
	fuckCalc();
});