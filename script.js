const nameField = document.querySelector(".name");

window.addEventListener("beforeunload", () => {
    window.localStorage.setItem("name", nameField.value);
});

window.addEventListener("load", () => {
    if (localStorage.getItem("name")) {
        nameField.value = window.localStorage.getItem("name");
    }
})

function showD2ate() {
    const date = document.querySelector(".date")
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = (new Date()).toLocaleDateString('en-US', options);
    date.textContent = currentDate;
}

function show2Time() {
    const time = document.querySelector(".time")
    const currentTime = (new Date()).toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeOfDay();
    setTimeout(showTime, 1000);
}

function set2TimeOfDay() {
    const greeting = document.querySelector(".greeting");
    let timeOfDay = null;
    let date = new Date();

    if (date.getHours() >= 5 && date.getHours() <= 12) {
        timeOfDay = "morning";
    } else if (date.getHours() > 12 && date.getHours() <= 16) {
        timeOfDay = "afternoon";
    } else if (date.getHours() > 16 && date.getHours() <= 23) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night"
    }

    greeting.textContent = `Good ${timeOfDay},`
}

showTime();