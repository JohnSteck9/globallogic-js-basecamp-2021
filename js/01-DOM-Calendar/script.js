const monthFullName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const monthShortName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const date = new Date();

renderWeekdays();

renderCalendar();

const nextMonth = document.getElementById("nextMonth");
nextMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

const prevMonth = document.getElementById("prevMonth");
prevMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

function renderWeekdays() {
    const dayShortNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "San"];
    const daysList = document.getElementById("days-list");

    let str = "";
    for (let i of dayShortNames) {
        console.log(i);
        str += `<span>${i}</span>`;
    }

    daysList.insertAdjacentHTML("beforeend", str);
}

function renderCalendar() {
    let sumCalendarNum = 0;

    // currentDay = date.getDay()
    currentDate = date.getDate();
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();

    const monthElement = document.getElementById("month");
    monthElement.innerHTML = monthFullName[currentMonth];

    const year = document.getElementById("year");
    year.innerHTML = currentYear;

    // ==============================
    let prevMonthDate = new Date(date.getFullYear(), date.getMonth(), 0);
    let currentMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let prevMonthLastDay = prevMonthDate.getDate();
    let currentMonthLastDay = currentMonthDate.getDate(); // 1-31
    let firstCurrentMonthDay = prevMonthDate.getDay(); // 0-6

    const days = document.getElementById("days");
    days.innerHTML = "";
    let daysString = "";

    while (firstCurrentMonthDay > 0) {
        daysString += `<span class="day grey-num">${
            prevMonthLastDay - firstCurrentMonthDay + 1
        }</span>`;
        firstCurrentMonthDay--;
        sumCalendarNum++;
    }

    today = new Date();

    for (let i = 1; i <= currentMonthLastDay; i++) {
        if (
            i === currentDate &&
            today.getDate() === currentDate &&
            today.getMonth() === currentMonth &&
            today.getFullYear() === currentYear
        ) {
            daysString += `<div class="day today">${i}</div>`;
        } else {
            daysString += `<div class="day" onclick=selectDays(this)>${i}</div>`;
        }

        sumCalendarNum++;
    }

    for (let i = 1; sumCalendarNum < 42; i++) {
        daysString += `<div class="day grey-num" >${i}</div>`;
        sumCalendarNum++;
    }
    days.insertAdjacentHTML("beforeend", daysString);
}

const selectDays = (id) => {
    let divs = document.getElementsByClassName("day");

    for (let i = 0; i < divs.length; i++) {
        if (
            divs[i].textContent == id.textContent &&
            !divs[i].classList.contains("num") &&
            !divs[i].classList.contains("grey-num")
        ) {
            divs[i].classList.add("num");
        } else if (
            divs[i].textContent == id.textContent &&
            divs[i].classList.contains("num") &&
            !divs[i].classList.contains("grey-num")
        ) {
            divs[i].classList.remove("num");
        }
    }
};