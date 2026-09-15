const button = document.getElementById("startButton");
const exploration = document.getElementById("exploration");

button.addEventListener("click", function() {
  exploration.style.display = "block";
});

const sleepData = [7.2, 6.8, 6.5, 5.9, 6.1, 7.0, 7.5, 7.8];

const stressors = [
  "Normal week",
  "Busy work deadline",
  "Family responsibilities",
  "Major project deadline",
  "Continued workload",
  "Deadline passed",
  "Lighter workload",
  "Vacation and rest"
];

const runningData = [45, 40, 30, 10, 20, 35, 50, 60];

const wellBeingData = [
  { fatigue: "Low", headache: "None", score: 8 },
  { fatigue: "Moderate", headache: "Mild", score: 7 },
  { fatigue: "Moderate", headache: "Mild", score: 6 },
  { fatigue: "High", headache: "Moderate", score: 4 },
  { fatigue: "High", headache: "Mild", score: 5 },
  { fatigue: "Moderate", headache: "None", score: 7 },
  { fatigue: "Low", headache: "None", score: 8 },
  { fatigue: "Low", headache: "None", score: 9 }
];

const sleepButton = document.getElementById("sleepButton");
const stressorsButton = document.getElementById("stressorsButton");
const runningButton = document.getElementById("runningButton");
const wellBeingButton = document.getElementById("wellBeingButton");

const dataDisplay = document.getElementById("dataDisplay");
const sleepChart = document.getElementById("sleepChart");
const patternSection = document.getElementById("patternSection");

sleepButton.addEventListener("click", function() {

  dataDisplay.innerHTML =
    "<h3>Jordan's Sleep</h3>" +
    "<p>Jordan's average sleep each week:</p>";

  sleepChart.className = "";

  let chart = "";

  for (let i = 0; i < sleepData.length; i++) {

    chart +=
      "<div class='sleep-column'>" +
        "<div class='sleep-bar' style='height: " +
        (sleepData[i] * 20) +
        "px;'>" +
        sleepData[i] +
        "</div>" +
        "<div>Week " +
        (i + 1) +
        "</div>" +
      "</div>";

  }

  sleepChart.innerHTML = chart;
  patternSection.style.display = "none";
});


stressorsButton.addEventListener("click", function() {

  dataDisplay.innerHTML =
    "<h3>Jordan's Stressors</h3>" +
    "<p>Here are some things happening in Jordan's life during each week.</p>";

  sleepChart.className = "stressor-view";

  let timeline = "";

  for (let i = 0; i < stressors.length; i++) {

    timeline +=
      "<div class='stressor-card'>" +
        "<strong>Week " +
        (i + 1) +
        "</strong>" +
        "<p>" +
        stressors[i] +
        "</p>" +
      "</div>";

  }

  sleepChart.innerHTML = timeline;
  patternSection.style.display = "none";
});


wellBeingButton.addEventListener("click", function() {

  dataDisplay.innerHTML =
    "<h3>Jordan's Well-Being</h3>" +
    "<p>Jordan recorded how they were feeling each week.</p>";

  sleepChart.className = "stressor-view";

  let cards = "";

  for (let i = 0; i < wellBeingData.length; i++) {

    cards +=
      "<div class='stressor-card'>" +
        "<strong>Week " +
        (i + 1) +
        "</strong>" +
        "<p><strong>Fatigue:</strong> " +
        wellBeingData[i].fatigue +
        "</p>" +
        "<p><strong>Headache:</strong> " +
        wellBeingData[i].headache +
        "</p>" +
        "<p><strong>Overall well-being:</strong> " +
        wellBeingData[i].score +
        "/10</p>" +
      "</div>";

  }

  sleepChart.innerHTML = cards;
  patternSection.style.display = "none";
});


runningButton.addEventListener("click", function() {

  dataDisplay.innerHTML =
    "<h3>Jordan's Running</h3>" +
    "<p>Jordan tracked the number of minutes they spent running each week.</p>";

  sleepChart.className = "";

  let chart = "";

  for (let i = 0; i < runningData.length; i++) {

    chart +=
      "<div class='sleep-column'>" +
        "<div class='sleep-bar' style='height: " +
        (runningData[i] * 2) +
        "px;'>" +
        runningData[i] +
        "</div>" +
        "<div>Week " +
        (i + 1) +
        "</div>" +
      "</div>";

  }

  sleepChart.innerHTML = chart;

  /* The detective challenge appears after Running */
  patternSection.style.display = "block";
});


/* DATA DETECTIVE CHALLENGE */

const patternButton = document.getElementById("patternButton");
const patternDisplay = document.getElementById("patternDisplay");

patternButton.addEventListener("click", function() {

  patternDisplay.innerHTML =
    "<h4>🕵️ Data Detective Challenge</h4>" +
    "<p>Look across Jordan's 8 weeks of information. Which week stands out to you?</p>" +

    "<button onclick='showWeek(2)'>Week 2</button>" +
    "<button onclick='showWeek(4)'>Week 4</button>" +
    "<button onclick='showWeek(6)'>Week 6</button>" +
    "<button onclick='showWeek(8)'>Week 8</button>" +

    "<div id='weekResult'></div>";

});


function showWeek(week) {

  const i = week - 1;

  const weekResult = document.getElementById("weekResult");

  weekResult.innerHTML =
    "<h4>Week " + week + "</h4>" +

    "<p><strong>Sleep:</strong> " +
    sleepData[i] +
    " hours</p>" +

    "<p><strong>Running:</strong> " +
    runningData[i] +
    " minutes</p>" +

    "<p><strong>Stressors:</strong> " +
    stressors[i] +
    "</p>" +

    "<p><strong>Well-being:</strong> " +
    wellBeingData[i].score +
    "/10</p>" +

    "<p><strong>Fatigue:</strong> " +
    wellBeingData[i].fatigue +
    "</p>" +

    "<p><strong>Headache:</strong> " +
    wellBeingData[i].headache +
    "</p>" +

    "<hr>" +

    "<p><strong>You've spotted something interesting. What would you do next?</strong></p>" +

    "<button onclick='investigate(\"compare\")'>Compare the weeks before and after</button>" +

    "<button onclick='investigate(\"pattern\")'>Look for the same pattern in other weeks</button>" +

    "<button onclick='investigate(\"missing\")'>Find out what information is missing</button>" +

    "<button onclick='investigate(\"cause\")'>Assume we know what caused it</button>" +

    "<div id='investigationResult'></div>";
}


function investigate(choice) {

  const result = document.getElementById("investigationResult");

  if (choice === "compare") {

    result.innerHTML =
      "<p><strong>Good detective work!</strong> Comparing the weeks before and after can help you determine whether this was an isolated change or part of a larger trend.</p>" +

      "<p><strong>Next question:</strong> Does the pattern continue, improve, or change?</p>";
  }


  if (choice === "pattern") {

    result.innerHTML =
      "<p><strong>Great thinking!</strong> Looking for the same pattern elsewhere can help you decide whether what you noticed is consistent or unusual.</p>" +

      "<p><strong>Next question:</strong> Do similar changes appear in other weeks?</p>";
  }


  if (choice === "missing") {

    result.innerHTML =
      "<p><strong>Excellent question!</strong> Real health data rarely tells us everything.</p>" +

      "<p>You might want to know more about Jordan's schedule, diet, other activities, illness, medications, or other factors that could help explain what you are seeing.</p>" +

      "<p><strong>Next question:</strong> What additional information would help you understand the pattern?</p>";
  }


  if (choice === "cause") {

    result.innerHTML =
      "<p><strong>Not so fast, detective!</strong> Two things happening at the same time does not prove that one caused the other.</p>" +

      "<p>Before drawing that conclusion, we would need more information.</p>" +

      "<p><strong>Try thinking like a scientist:</strong> What else would you want to investigate?</p>";
  }

}
