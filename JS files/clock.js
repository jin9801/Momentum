const clock = document.querySelector("#clock");
const calendar = document.querySelector("#calendar");

function getClock() { // getClock이라는 펑션 만듦.
    const allday = new Date();
    const years = allday.getFullYear();
    const months = allday.getMonth()+1;
    const days = allday.getDay()+17;
    const hours = allday.getHours() % 12;
    const minutes = allday.getMinutes();
    const seconds = allday.getSeconds();
    const monthsStr = `${months < 10 ? `0${months}` : months}월`;
    const daysStr = `${days < 10 ? `0${days}` : days}일`;
    const hoursStr = `${hours < 10 ? `0${hours}` : `${hours}`}시`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}분`;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}초`;

    calendar.innerText = `${years}년 ${monthsStr} ${daysStr}`;
    clock.innerText = `${hoursStr} ${minutesStr} ${secondsStr}`;
}

getClock();

setInterval(getClock,1000);