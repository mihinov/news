let x = null, y = null;
window.addEventListener('touchstart', () => {
	x = event.touches[0].clientX;
	y = event.touches[0].clientY;
})

window.addEventListener('touchmove', () => {
	if (Math.abs(y) - Math.abs(event.touches[0].clientY) > 40) {
		return;
	}
	if (header__container.classList.contains('active')) {

		if (x < event.touches[0].clientX - 40) {
			startClickHeaderBurger();
			return;
		}

	} else {

		if (Math.abs(x) - Math.abs(event.touches[0].clientX) > 40) {
			startClickHeaderBurger();
			return;
		}
	}

});