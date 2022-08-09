function showDate() {
    const date = document.querySelector(".date")
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = (new Date()).toLocaleDateString('en-US', options);
    date.textContent = currentDate;
}

function showTime() {
    const time = document.querySelector(".time")
    const currentTime = (new Date()).toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

showTime();