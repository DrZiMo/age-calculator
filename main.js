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
        getDifference();
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

function getDifference() {
    let today = new Date();
    let birthDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
  
    let diffInYears = today.getFullYear() - birthDate.getFullYear();
    let diffInMonths = today.getMonth() - birthDate.getMonth();
    let diffInDays = today.getDate() - birthDate.getDate();
  
    if (diffInMonths < 0 || (diffInMonths === 0 && diffInDays < 0)) {
      diffInYears--;
      diffInMonths += 12;
    }
  
    if (diffInDays < 0) {
      let daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      diffInDays += daysInPrevMonth;
      diffInMonths--;
    }
  
    yearNumber.textContent = diffInYears;
    monthNumber.textContent = diffInMonths;
    dayNumber.textContent = diffInDays;
  }