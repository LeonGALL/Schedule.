// AT THE LOADING OF THE PAGE :
setMenuWeek();
setPageWeek();

// PAGES and MENU
var week_link = document.getElementById("week_link");
var day_link = document.getElementById("day_link");
var nutrition_link = document.getElementById("nutrition_link");
var current = week_link;

week_link.onclick = () => {
  if (setMenuWeek()) setPageWeek();
};

day_link.onclick = () => {
  if (setMenuDay()) setPageDay();
};

nutrition_link.onclick = () => {
  if (setMenuNutrition()) setPageNutrition;
};

function setMenuWeek() {
  if (current === week_link) return false;
  week_link.style.borderRight = "1px solid black";
  week_link.style.borderRadius = "10px";
  day_link.style.borderRight = "1px solid black";
  day_link.style.borderLeft = "none";
  day_link.style.borderRadius = "0px";
  nutrition_link.style.borderLeft = "none";
  nutrition_link.style.borderRadius = "none";
  current = week_link;
  return true;
}

function setMenuDay() {
  if (current === day_link) return false;
  week_link.style.borderRight = "none";
  week_link.style.borderRadius = "0px";
  day_link.style.borderRight = "1px solid black";
  day_link.style.borderLeft = "1px solid black";
  day_link.style.borderRadius = "10px";
  nutrition_link.style.borderLeft = "none";
  nutrition_link.style.borderRadius = "none";
  current = day_link;
  return true;
}

function setMenuNutrition() {
  if (current === nutrition_link) return false;
  week_link.style.borderRight = "1px solid black";
  week_link.style.borderRadius = "0px";
  day_link.style.borderRight = "0px";
  day_link.style.borderLeft = "0px";
  day_link.style.borderRadius = "0px";
  nutrition_link.style.borderLeft = "1px solid black";
  nutrition_link.style.borderRadius = "10px";
  current = nutrition_link;
  return true;
}

// AJAX REQUESTS TO GET THE ASKED PAGE
function setPageWeek() {
  return false;
}

function setPageDay() {
  return false;
}

function setPageNutrition() {
  return false;
}

// TASK
[].forEach.call(document.querySelectorAll(".task h3"), (task) => {
  task.onclick = (e) => {
    e.target.parentNode.classList.toggle("done");
  };
  task.oncontextmenu = (e) => {
    oncontextmenu__(e);
  };
});

function oncontextmenu__(e) {
  e.preventDefault();
  document.getElementById("schedule_container").classList.add("opacity");
  const rect = e.target.getBoundingClientRect();
  let menu = document.getElementById("task_right_menu");
  menu.classList.add("visible");
  menu.style.top =
    "" +
    (rect.top - document.body.scrollTop + e.target.offsetHeight / 3) +
    "px";
  menu.style.left = "" + (rect.left - document.body.scrollLeft) + "px";
  document.body.onclick = (ev) => {
    ev.preventDefault();
    menu.classList.remove("visible");
    document.getElementById("schedule_container").classList.remove("opacity");
  };
  document.getElementById("modify").onclick = (ev) => {
    task_edit(e.target);
    save();
  };
  document.getElementById("delete").onclick = (ev) => {
    e.target.parentNode.remove();
    save();
  };
}

// Add a task
function createTask(elem, text) {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  div.setAttribute("class", "task");
  h3.innerText = text;
  div.appendChild(h3);
  elem.appendChild(div);
  return h3;
}

[].forEach.call(document.querySelectorAll(".plusbutton"), (plus) => {
  plus.onclick = (e) => {
    var task = createTask(e.target.parentNode, "");
    task_edit(task);
    task.onclick = (e) => {
      e.target.parentNode.classList.toggle("done");
    };
    task.oncontextmenu = (e) => {
      oncontextmenu__(e);
    };
  };
});

function save() {
  return false;
}

function task_edit(elem) {
  current_elem = elem;
  var editask = document.getElementById("editask");
  document.getElementById("schedule_container").classList.add("opacity");
  editask.classList.add("visible");
  editask.parentNode.classList.add("visible");
  editask.value = elem.innerText;
}
var current_elem;
document
  .getElementById("editask")
  .parentNode.addEventListener("submit", (e) => {
    e.preventDefault();
    current_elem.innerText = document.getElementById("editask").value;
    document.getElementById("schedule_container").classList.remove("opacity");
    editask.classList.remove("visible");
    editask.parentNode.classList.remove("visible");
    editask.value = "";
  });
