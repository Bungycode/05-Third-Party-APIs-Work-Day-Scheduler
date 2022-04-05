headerEl = document.querySelector("#header");









var calendarAppTime = function () {
    time = moment().format("MMMM Do YYYY");
    console.log(time);

    appTime = document.createElement("p");
    appTime.setAttribute("class", "lead");
    appTime.textContent = time;

    headerEl.appendChild(appTime);
}

calendarAppTime();

