let x = null, y = null;
window.addEventListener('touchstart', () => {
	x = event.touches[0].clientX;
	y = event.touches[0].clientY;
})

window.addEventListener('touchmove', () => {
	if (header.classList.contains('off')) {
		return;
	}
	if (y - event.touches[0].clientY > Math.abs(40)) {
		return;
	}
	if (header__container.classList.contains('active')) {

		if (x < ( (event.view.screen.availWidth/3)*2 || (event.view.screen.width/3)*2 )) {
			return;
		}

		if (Math.abs(x) - Math.abs(event.touches[0].clientX) > 40) {
			startClickHeaderBurger();
			return;
		}

	} else {

		if (x > (event.view.screen.availWidth/3 || event.view.screen.width/3)) {
			return;
		}

		if (x < event.touches[0].clientX - 40) {
			startClickHeaderBurger();
			return;
		}

	}

});