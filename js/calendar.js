Date.prototype.daysInMonth = function() {
	return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};
let calendar = document.querySelector('.calendar');
let weeks = [...calendar.querySelectorAll('.week')];
let calendar__month = calendar.querySelector('.calendar__month');
let calendar__year = calendar.querySelector('.calendar__year');
let calendar__left = calendar.querySelector('.calendar__left');
let calendar__right = calendar.querySelector('.calendar__right');
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let calendarNumber = 0;
let month__wrapper = calendar.querySelector('.month__wrapper');

let days = [];
for (let i = 0; i < weeks.length; i++) {
	for (let j = 0; j < weeks[i].children.length; j++) {
		days.push(weeks[i].children[j]);	
	}
}

let thisMonth = function (month) {
	return months[month];
};

let elem = document.createElement('span');
let startDate = new Date();

let activeMonth;
for (let i = 0; i < months.length; i++) {
	let block__month = document.createElement('div');
	block__month.classList.add('month');
	block__month.innerHTML = months[i];
	if (startDate.getMonth() === i) {
		block__month.classList.add('active');
		activeMonth = block__month;
	}
	month__wrapper.append(block__month);
}

month__wrapper.addEventListener('click', (event) => {
	let text = event.target.lastChild.data;
	for (let i = 0; i < months.length; i++) {
		if (text === months[i]) {
			let year = (calendarNumber + startDate.getMonth())/12;
			year = Math.floor(year)*12;
			calendarNumber = i - startDate.getMonth() + year;
			clearDays();
			logicCalendar();
		}
	}
});

calendar__left.addEventListener('click', () => {
	calendarNumber--;
	clearDays();
	logicCalendar();
});

calendar__right.addEventListener('click', () => {
	calendarNumber++;
	clearDays();
	logicCalendar('true');
});

calendar__month.addEventListener('mouseover', () => {
	month__wrapper.classList.add('active');
	month__wrapper.style.cursor = 'pointer';
});

calendar__month.addEventListener('mouseout', () => {
	month__wrapper.classList.remove('active');
});

month__wrapper.addEventListener('click', () => {
	month__wrapper.classList.remove('active');
	month__wrapper.style.cursor = 'default';
});



function logicCalendar(bool) {
	let thisDate = new Date();
	if (startDate.getMonth() !== thisDate.getMonth()) {
		if (bool === 'true') {
			calendarNumber--;
		}
	}
	let thisDay = thisDate.getDate();
	thisDate.setDate(1);
	let sum = thisDate.getMonth() + calendarNumber;
	let year = Math.floor(sum / 12);
	sum %= 12;
	if (sum < 0) {
		sum = 12 + sum;
	}
	thisDate.setMonth(sum);
	let thisYear = thisDate.getFullYear() + year;
	let dayWeek = thisDate.getDay();
	if (dayWeek == 0) {
		dayWeek = 6;
	} else {
		dayWeek--;
	}
	thisDate.setDate(thisDay);
	let daysClone = days.slice();
	daysClone.splice(0, dayWeek);
	let day = 1;
	for (let i = 0; i < thisDate.daysInMonth(); i++) {
		daysClone[i].innerHTML = day;
		day++;
	}
	if (calendarNumber === 0) {
		daysClone[thisDay-1].classList.add('today');
	}
	elem.innerHTML = thisMonth(sum);
	calendar__month.prepend(elem);
	calendar__year.innerHTML = thisYear;
	if (startDate.getFullYear() !== thisYear) {
		activeMonth.classList.remove('active');
	} else {
		activeMonth.classList.add('active');
	}
}

function clearDays() {
	for (let i = 0; i < days.length; i++) {
		days[i].innerHTML = '';
		if (days[i].classList.contains('today')) {
			days[i].classList.remove('today');
		}
	}
}

logicCalendar();