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

//연습
const friends = {
  name: "monica",
  age: 25,
  job: "head chef",
};

console.log(friends.name);
console.log(friends);

function describe(fruits, color) {
  console.log(fruits + "'s color is " + color);
}

describe("apple", "red");
describe("grape", "purple");
describe("banana", "yellow");
describe("watermelon", "green and black");

const object = {
  name: "monica",
  intro: function (fruits, color) {
    console.log(fruits + "'s color is " + color);
  },
};
console.log(object.name);
object.intro("banana", "yellow");

const toDo = ["walk the dog", "make lunch", "do the homework"];
console.log(toDo[1]);
toDo[1] = "watering the plant";
console.log(toDo[1]);
