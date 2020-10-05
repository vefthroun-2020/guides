// Loops

// number++
// number = number + 1
// Iterate
// var number;
// for (number = 0; number < 100; number++) {
//   console.log(number);
//   // number = number + 1
// }
// console.log("For loop ended.");

var things = ["💃", "🕺", "🦄", "🤯", "🐓", "🍕", "🐞", "🐪", "🤣", "🐶"];

// for (INITIAL, CONTINUE, WHAT_TO_DO_IN_THE_END) {
var i;
console.log("First loop");
for (i = 0; i < things.length; i++) {
  console.log(things[i]);
}

console.log("Second loop");
for (emoji of things) {
  console.log(emoji);
}

console.log("Third loop");
things.forEach(function (emoji) {
  console.log(emoji);
});

// Iterating objects
var people = [
  {
    name: "Pedro",
  },

  {
    name: "Smári",
  },
];

var x;
var names = [];
for (x = 0; x < people.length; x++) {
  names.push(people[x].name);
}
console.log(names);
