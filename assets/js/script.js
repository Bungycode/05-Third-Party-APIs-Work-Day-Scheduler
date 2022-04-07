headerEl = document.querySelector("#header");
tBodyEl = document.querySelector("tbody");

time = moment();
console.log(time);
var calendarAppTime = function () {
  console.log(time);

  appTime = document.createElement("p");
  appTime.setAttribute("class", "lead");
  appTime.textContent = time.format("MMMM Do YYYY");

  headerEl.appendChild(appTime);
};

function createCalendar() {
  var currentTime = time.local().hour();
  console.log(currentTime);
  for (var i = 0; i < 24; i++) {
    var calendarHour = moment(i, "H").format("hA");

    tRowEl = document.createElement("tr");
    tRowEl.innerHTML = `
                <th class="col-1">
                    <h4>${calendarHour}</h4>
                </th>
                <td class="col-10">
                    <textarea class="col"></textarea>
                </td>
                <td class="col-1 saveBtn">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                </td>
                `;
    tBodyEl.appendChild(tRowEl);
    console.log(currentTime + " " + i);
    if (currentTime === i) {
        tRowEl.children[1].children[0].classList.add("present");
    } else if (currentTime > i) {
        tRowEl.children[1].children[0].classList.add("past");
    } else {
      tRowEl.children[1].children[0].classList.add("future");
    }
  }
}

function setEventListeners() {
  
}

function init() {
calendarAppTime();
createCalendar();
setEventListeners();
}

init();
