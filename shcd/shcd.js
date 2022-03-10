// loop & array
let snacks = ["choco-chip", "vanilla", "cookie-dough", "green-tea"];
let i = 0;
while (i < snacks.length) {
  document.write(
    "<li><a href='http://a.com/" + snacks[i] + "'>" + snacks[i] + "</a></li>"
  );
  i = i + 1;
}

// 함수function
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
//위와 같은 결과가 출력 되지만 훨씬 효율적인 코드
document.write("<li>1</li>");
two();
document.write("<li>3</li>");
two();

function sum(a, b) {
  document.write(a + b);
}
sum(5, 6);
