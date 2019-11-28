Date.prototype.daysInMonth = function() {
	return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};
let calendar = document.querySelector('.calendar');
let weeks = [...calendar.querySelectorAll('.week')];
let calendar__month = calendar.querySelector('.calendar__month');
let calendar__year = calendar.querySelector('.calendar__year');
let calendar__left = calendar.querySelector('.calendar__left');
let calendar__right = calendar.querySelector('.calendar__right');
let calendarNumber = 0;

calendar__left.addEventListener('click', () =>{
	calendarNumber--;
	clearDays();
	logicCalendar(calendarNumber);
});

calendar__right.addEventListener('click', () =>{
	calendarNumber++;
	clearDays();
	logicCalendar(calendarNumber);
});

let days = [];
for (let i = 0; i < weeks.length; i++) {
	for (let j = 0; j < weeks[i].children.length; j++) {
		days.push(weeks[i].children[j]);
	}
}
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let thisMonth = function (month) {
	return months[month];
};

function logicCalendar(calendarNum) {
	let thisDate = new Date();
	if (calendarNum !== undefined) {
		thisDate.setMonth(thisDate.getMonth() + calendarNum);
	}
	let thisYear = thisDate.getFullYear();
	let thisDay = thisDate.getDate();
	thisDate.setDate(1);
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
	if (calendarNum === undefined || calendarNum === 0) {
		daysClone[thisDay-1].classList.add('today');
	}
	calendar__month.innerHTML = thisMonth(thisDate.getMonth());
	calendar__year.innerHTML = thisYear;
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