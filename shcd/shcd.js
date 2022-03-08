// loop & array
let snacks = ["choco-chip", "vanilla", "cookie-dough", "green-tea"];
let i = 0;
while (i < snacks.length) {
  document.write(
    "<li><a href='http://a.com/" + snacks[i] + "'>" + snacks[i] + "</a></li>"
  );
  i = i + 1;
}
