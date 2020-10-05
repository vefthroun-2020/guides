// Conditionals

// Expressions
// (1 + 1) // 2
// ( 10 > 20 ) // false
// ( ['apple', 'orange'].length ) // 2
// ( ['monday', 'friday'].length > 20 ) // false

// Truthy values
// true
// 'something'
// 2020
// []
// [10,20,30]

// Falsy values
// 0
// false
// undefined
// NaN
// null
// ''

// Expressions: Truthy or Falsy?
// (1 + 1) // Truthy
// ( 10 > 20 ) // Falsy
// ( ['apple', 'orange'].length ) // Truthy
// ( ['monday', 'friday'].length > 20 ) // Falsy
// ( 1 - 1 ) // Falsy

// If statement
var day = "Monday";
if (day === "Tuesday") {
  // Truthy code
  console.log("Truthy");
} else {
  // Falsy code
  console.log("Falsy");
}

// If statement
var birthYear = 1988;
// 2020 - 1988 -> 32
// 32 > = 21
// true
if (2020 - birthYear >= 21) {
  console.log("You can drink beer");
} else {
  console.log("GO back to school");
}

// If statement
var hasKids = false;
if (hasKids) {
  console.log("Nice.");
} else {
  console.log("Also nice.");
}

// If statement
var person = {
  name: "Smári",
  age: 22,
  hasKids: true,
};
if (person.hasKids) {
  console.log("This person has kids");
}

// Switch statement
var status = "done";

if (status === "todo") {
  console.log("Still to do");
}

if (status === "doing") {
  console.log("Doing this task");
}

if (status === "done") {
  console.log("This task is done");
}

switch (status) {
  case "todo":
    console.log("Still to do");
    break;

  case "doing":
    console.log("Doing this task");
    break;

  case "done":
    console.log("This task is done");
}
