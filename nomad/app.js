const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function handleLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", handleLoginSubmit);
link.addEventListener("click", handleLinkClick);
