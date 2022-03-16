const hellos = document.getElementsByClassName("hello");

console.log(hellos);

const title = document.getElementsByTagName("h1");

console.log(title);

const fromCss = document.querySelector(".hello h1");

console.log(fromCss);

fromCss.innerText = "Hello";
