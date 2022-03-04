//function ex.1
function sayHello(nameOfPerson, age, hobby) {
  console.log(
    "hello my name is " +
      nameOfPerson +
      " and I am " +
      age +
      " and I like " +
      hobby
  );
}

sayHello("monica", 25, "cooking");
sayHello("rachel", 25, "fashions");
sayHello("pheobe", 27, "walking");

//function ex.2 (calculator)
function plus(a, b) {
  console.log(a + b);
}

plus(5, 5);

function devide(a, b) {
  console.log(a / b);
}
devide(6, 3);

//object안에서 function
const player = {
  name: "monica",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + ", nice to meet you.");
  },
};

console.log(player.name);
player.sayHello("rachel");
player.sayHello("ross");
player.sayHello("pheobe");
player.sayHello("chandler");
