const arrowBtn = document.getElementById('arrow');

// error messages
const errMsgD = document.getElementById('day-err-msg');
const errMsgM = document.getElementById('month-err-msg');
const errMsgY = document.getElementById('year-err-msg');

// labels
const labelD = document.getElementById('day-label');
const labelM = document.getElementById('month-label');
const labelY = document.getElementById('year-label');

// inputs
const dayInput = document.getElementById('day'); 
const monthInput = document.getElementById('month'); 
const yearInput = document.getElementById('year');

// numbers
const dayNumber = document.getElementById('day-number');
const monthNumber = document.getElementById('month-number');
const yearNumber = document.getElementById('year-number');

const date = new Date();

let err = false;

arrowBtn.addEventListener('click', ()=> checkEmpty());

function checkEmpty() {
    removeErrors();
    if (dayInput.value == '') {
        error("it can't be empty",'day');
    }
    else {
        calculateAge();
    }
    if (monthInput.value == '') {
        error("it can't be empty",'month');
    }
    else {
        calculateAge();
    }
    if (yearInput.value == '') {
        error("it can't be empty",'year');
    }
    else {
        calculateAge();
    }
}

function calculateAge() {
    if (dayInput.value > 31 || dayInput.value < 1) {
        error("invalid day",'day');
    }
    else {
        displayAge();
    }
    if (monthInput.value > 12 || monthInput.value < 1) {
        error("invalid month",'month');
    }
    else {
        displayAge();
    }
    if (yearInput.value > date.getFullYear()) {
        error("it must be past",'year');
    }
    else {
        displayAge();
    }
}

function displayAge() {
    if(!err) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        dayNumber.textContent = getDayDifference(day);
        monthNumber.textContent = getMonthDifference(month);
        yearNumber.textContent = getYearDifference(year);
    }
    else {
        dayNumber.textContent = '--';
        monthNumber.textContent = '--';
        yearNumber.textContent = '--';
    }
}

function error(msg, type) {
    err = true;
    if (type === 'day') {
        dayInput.className = 'error';
        errMsgD.style.display = 'block';
        errMsgD.textContent = msg;
        labelD.className = 'error';
    }
    else if (type === 'month') {
        monthInput.className = 'error';
        errMsgM.style.display = 'block';
        errMsgM.textContent = msg;
        labelM.className = 'error';
    }
    else if (type === 'year') {
        yearInput.className = 'error';
        errMsgY.style.display = 'block';
        errMsgY.textContent = msg;
        labelY.className = 'error';
    }
}

function removeErrors() {
    err = false;
    dayInput.classList.remove('error');
    monthInput.classList.remove('error');
    yearInput.classList.remove('error');

    labelD.classList.remove('error');
    labelM.classList.remove('error');
    labelY.classList.remove('error');

    errMsgD.style.display = 'none';
    errMsgM.style.display = 'none';
    errMsgY.style.display = 'none';
}

function getDayDifference(day) {
    let dayDiff = 0;
    if (day > dayInput.value) {
        dayDiff = day - dayInput.value;
    }
    else {
        dayDiff = dayInput.value - day;
    }
    return dayDiff;
}

function getMonthDifference(month) {
    let monthDiff = 0;
    if (month > monthInput.value) {
        monthDiff = month - monthInput.value;
    }
    else {
        monthDiff = monthInput.value - month;
    }
    return monthDiff;
}

function getYearDifference(year) {
    let yearDiff = 0;
    if (year > yearInput.value) {
        yearDiff = year - yearInput.value;
    }
    else {
        yearDiff = yearInput.value - year;
    }
    return yearDiff;
}