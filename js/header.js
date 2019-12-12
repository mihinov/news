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

function whatPhone() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function fuckCalc() {
	let paddingContainer = window.getComputedStyle(container, null).padding;
	let paddingBody = window.getComputedStyle(document.body, null).padding;
	paddingBody = parseFloat(paddingBody.slice(4, 6));
	paddingContainer = parseFloat(paddingContainer.slice(4, 6)*2);
	if (paddingBody !== NaN) {
		paddingContainer += paddingBody;
	}
	let widthContainer = container.offsetWidth - header__burger.offsetWidth - paddingContainer;
	if (header__container.classList.contains('active')) {
		header__burger.style.marginLeft = widthContainer + 'px';
	} else {
		header__burger.style.marginLeft = '0';
	}
}

function bodyPadding() {
	if (header__container.classList.contains('active')) {
		if (!whatPhone()) {
			document.body.style.paddingRight = '17px';
			document.body.style.overflow = 'hidden';
		}
	} else {
		document.body.style.paddingRight = '0';
		document.body.style.overflow = 'auto';
	}
}

header__burger.addEventListener('click', () => {
	header__container.classList.toggle('active');
	burger__menu.classList.toggle('active');
	bodyPadding();
	fuckCalc();
});

window.addEventListener('resize', () => {
	fuckCalc();
});