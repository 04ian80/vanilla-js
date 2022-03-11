const snacks = ["choco-chip", "vanilla", "cookie-dough", "green-tea"];
let i = 0;
while (i < snacks.length) {
  document.write(
    "<li><a href='http://a.com/" + snacks[i] + "'>" + snacks[i] + "</a></li>"
  );
  i = i + 1;
}

function linkSetColor(color) {
  const aList = document.querySelectorAll("a");
  let l = 0;
  while (l < aList.length) {
    aList[l].style.color = color;
    l = l + 1;
  }
}
function bodySetColor(color) {
  document.querySelector("body").style.color = color;
}
function bodySetBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}
function inputSetColor(color) {
  document.querySelector("input").style.color = color;
}
function inputSetBackgroundColor(color) {
  document.querySelector("input").style.backgroundColor = color;
}

function nightDayHandler(self) {
  const bodyColor = document.querySelector("body");
  const inputColor = document.querySelector("input");
  if (self.value === "night") {
    bodySetBackgroundColor("rgb(55,55,55)");
    bodySetColor("snow");
    inputSetBackgroundColor("snow");
    inputSetColor("rgb(55,55,55)");
    self.value = "day";

    linkSetColor("powderblue");
  } else {
    bodySetBackgroundColor("snow");
    bodySetColor("rgb(55, 55, 55)");
    inputSetBackgroundColor("rgb(55,55,55)");
    inputSetColor("snow");
    self.value = "night";

    linkSetColor("blue");
  }
}
