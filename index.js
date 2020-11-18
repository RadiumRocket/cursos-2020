// VAR - LET purpose
var greeting = "say Hi";
greeting = "say Hello instead";

//---------------------------------------------------------

// Redefining

// Using var
var greeting = "say Hi";
var greeting = "say Hello instead"; // Not err

// Using let
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared


//---------------------------------------------------------

// Block scoping

// Using var
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"

// Using let
let greeting = "say Hi";
let times = 4;


if (times > 3) {
     let greeting = "say Hello instead";
     console.log(greeting);// "say Hello instead"
 }
console.log(greeting) // say Hi


//---------------------------------------------------------

// CONST purpose
const greeting = "say Hi";
greeting = "say Hello instead"; // "Uncaught TypeError: invalid assignment to const 'greeting'"
