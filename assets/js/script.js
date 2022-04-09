// All of the query selectors are located here.
var headerEl = document.querySelector("#header");
var tBodyEl = document.querySelector("tbody");
var textBoxEl = document.querySelector(".textBox");
//var textAreaParent = document.querySelector(".textAreaParent");

// Declare a variable and set it the value of moment()
time = moment();
console.log(time);

// This function sets the date at the top of the program.
var calendarAppTime = function () {
  console.log(time);

  var appTime = document.createElement("p");
  appTime.setAttribute("class", "lead");
  appTime.textContent = time.format("MMMM Do YYYY");

  headerEl.appendChild(appTime);
};

// This function creates the actual calendar on the page.
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
                <td class="col-10 p-0 textAreaParent">
                    <textarea class="col textBox"></textarea>
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

// Declare a function that holds all the event listeners.
function setEventListeners() {
  // Jquery Code Alternative to the code below
  // $(".textAreaParent").on(function (event) {
  //   console.log(event.target);
  //   $(".textBox").css("border-color: blue;");
  // });
  console.log("This event listener is working");
  var textAreaParent = document.querySelector(".textAreaParent");
  console.log(textAreaParent);
  var textBoxElList = document.querySelectorAll(".textBox");

  // Set functionality for mouse events onto textarea
  textBoxElList.forEach(function (textBoxEl) {
    if (textBoxEl) {
      textBoxEl.addEventListener("focus", function () {
        console.log("clicked on")
        var addCustomCSS = textBoxEl.setAttribute("style", "border: 3px solid blue; background-color: lightblue;");
        addCustomCSS;
      });
    } 
      textBoxEl.addEventListener("blur", function () {
      console.log("clicked off (blur)");
      var removeCustomCSS = textBoxEl.removeAttribute("style", "border: 3px solid blue; background-color: lightgreen;");
      removeCustomCSS;
  });
});
}

$(".textBox").on("focus", function (event) {
  console.log(event.target);
});

// Declare a function that initializes the program.
function init() {
  calendarAppTime();
  createCalendar();
  setEventListeners();
}

// Call the start of the program here.
init();
