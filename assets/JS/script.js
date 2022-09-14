// DOM elements and Variables
var projectName = $("#project-name");
var projectType = $(".project-type");
var rate = $("#rate");
var date = $("#datepicker");
var submitBtn = $("#submit");
var tbody = document.querySelector('#tbody');
var projectArr = [];
var time = moment().format("LTS");

init();
setInterval(clock, 1000);

function init() {
  $("#time").text(time);
  var initStorage = JSON.parse(localStorage.getItem('projectStorage'));
  if (initStorage != null) {
    for (i = 0; i < initStorage.length; i++) {
      projectArr.push(initStorage[i]);
    }
  }
  console.log(projectArr);
  populateProjects();
}

function populateProjects() {
  for (var i = 0; i < projectArr.length; i++) {
    var tr = document.createElement('tr');
    tr.innerHTML = "<th scope='row'>" + projectArr[i].userProjectName + "</th>";
    tbody.appendChild(tr);
    console.log(tr);
  }
}

function clock() {
  $("#time").text(time);
  time = moment().format("LTS")
}
// Date Picker
$(function () {
  $("#datepicker").datepicker();
});

submitBtn.click(captureData);
function captureData() {
  var project = {
    userProjectName: "",
    userProjectType: "",
    userRate: "",
    userDate: "",
    daysUntilDD: function daysUntil() {},
    potentialTE: function potentialTE() {},
  };
    project.userProjectName = projectName.val();
    project.userProjectType = $("#dropdown option:selected").text().trim(" ");
    project.userRate = rate.val();
    project.userDate = date.val();

    projectArr.push(project);

    localStorage.setItem('projectStorage', JSON.stringify(projectArr));
}