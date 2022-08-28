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
