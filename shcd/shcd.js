// loop & array
let snacks = ["choco-chip", "vanilla", "cookie-dough", "green-tea"];
let i = 0;
while (i < snacks.length) {
  document.write(
    "<li><a href='http://a.com/" + snacks[i] + "'>" + snacks[i] + "</a></li>"
  );
  i = i + 1;
}

function two() {
  document.write("<li>2-1</li>");
  document.write("<li>2-2</li>");
}

document.write("<li>1</li>");
document.write("<li>2-1</li>");
document.write("<li>2-2</li>");
document.write("<li>3</li>");
document.write("<li>2-1</li>");
document.write("<li>2-2</li>");

document.write("<li>1</li>");
two();
document.write("<li>3</li>");
two();
