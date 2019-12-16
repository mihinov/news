let header = document.querySelector('.header');
let header__burger = document.querySelector('.header__burger');
let burger__menu = document.querySelector('.burger__menu');
let header__container = document.querySelector('.header__container');
let posts__intro = document.querySelector('.posts__intro');
let header__logo = document.querySelector('.header__logo');

function whatPhone() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile Safari|PlayBook|KFAPWI/i.test(navigator.userAgent);
}

function fuckCalc() {
	let paddingContainer = window.getComputedStyle(posts__intro, null).padding;
	let paddingBody = window.getComputedStyle(document.body, null).padding;
	paddingBody = parseFloat(paddingBody.slice(4, 6));
	paddingContainer = parseFloat(paddingContainer.slice(4, 6)*2);
	if (paddingBody !== NaN) {
		paddingContainer = parseFloat(paddingContainer + paddingBody);
	}
	let widthContainer = posts__intro.offsetWidth - header__burger.offsetWidth;
	if (document.body.offsetWidth >= 1300) {
		paddingContainer = parseFloat(paddingContainer/2);
		widthContainer = parseFloat(widthContainer - paddingContainer);
	}
	if (header__container.classList.contains('active')) {
		header__burger.style.marginLeft = widthContainer + 'px';
		if (whatPhone() && event.type === 'resize') {
			document.body.style.overflow = 'hidden';
		}
	} else {
		if (event.type !== 'resize') {
			if (!whatPhone()) {
				document.body.style.paddingRight = '17px';
				burger__menu.style.paddingRight = '17px';
			}
			document.body.style.overflow = 'hidden';
			header__burger.style.marginLeft = '0';
			burger__menu.style.paddingRight = '0';
		}
		function showMessage() {
			burger__menu.style.paddingRight = '0';
			document.body.style.paddingRight = '0';
			document.body.style.overflow = 'auto';
			header__burger.removeEventListener("transitionend", showMessage);
		}
		header__burger.addEventListener("transitionend", showMessage);
	}
}

function bodyPadding() {
	
	if (header__container.classList.contains('active'))  {
		if (!whatPhone()) {
			document.body.style.paddingRight = '17px';
			burger__menu.style.paddingRight = '17px';
		}
		document.body.style.overflow = 'hidden';
	} else {
		burger__menu.style.paddingRight = '0';
		document.body.style.paddingRight = '0';
		document.body.style.overflow = 'auto';
	}
}

function startClickHeaderBurger() {
	header__container.classList.toggle('active');
	burger__menu.classList.toggle('active');
	bodyPadding();
	fuckCalc();
}

header__burger.addEventListener('click', () => {
	startClickHeaderBurger();
});

window.addEventListener('resize', () => {
	if (!header__container.classList.contains('active')) {
		return false;
	}
	fuckCalc();
});

let scrollPrev = 0;
let headerHeight = header.offsetHeight;
let scrolled

window.addEventListener('scroll', () => {
	if (header__container.classList.contains('active')) {
		return false;
	}
	scrolled = window.pageYOffset;
	if (scrolled > 100 && scrolled > scrollPrev) {
		header.classList.add('off');
	} else {
		header.classList.remove('off');
	}
	scrollPrev = scrolled;
});