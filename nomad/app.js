const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const clickedClass = "clicked sexy-font";
  const h1Class = h1.className;
  let newClass;
  if (h1Class === clickedClass) {
    newClass = "";
  } else {
    newClass = clickedClass;
  }
  h1.className = newClass;
}

h1.addEventListener("click", handleTitleClick);
