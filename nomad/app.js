const title = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "teal";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copied!");
}

function handleWindowOffline() {
  alert("WIFI disconnected");
}

function handleWindowOnline() {
  alert("WIFI connected");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
