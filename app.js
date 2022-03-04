const player = {
  name: "monica",
  age: 25,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);

player.lastName = "geller";
console.log(player);

player.age = player.age + 10;
console.log(player.age);
