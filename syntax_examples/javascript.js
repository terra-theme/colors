// A single-line comment in JavaScript

/*
A multi-line comment
in JavaScript
*/

// Defining a constant
const PI = 3.14159;

// Defining a variable
let radius = 5.0;

// Defining a custom type
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

// Defining a function
function areaOfCircle(c) {
  return PI * c.radius * c.radius;
}

// Defining a "trait"-like mechanism using a class
class Shape {
  area() {}
}

Circle.prototype = Object.create(Shape.prototype);

// Control structures
if (PI > 3.0) {
  console.log("PI is greater than 3.0");
} else {
  console.log("PI is not greater than 3.0");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(`Hello, ${i}`);
}

let j = 0;
while (j < 3) {
  console.log(`j: ${j}`);
  j++;
}

// Arrays
const fruits = ["apple", "banana", "cherry"];
const newFruits = fruits.slice();
newFruits.push("orange");

// Objects as hash maps
const person = {
  name: "John",
  age: "30",
  city: "New York",
};

// Using custom types and "traits"
const circle = new Circle(radius);
console.log(`Circle area: ${circle.area()}`);

const shape = circle;
console.log(`Shape area: ${shape.area()}`);

// Defining a function that returns a Promise
function squareRoot(x) {
  return new Promise((resolve, reject) => {
    if (x < 0) {
      reject("Math: square root of negative number");
    } else {
      resolve(Math.sqrt(x));
    }
  });
}

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the map function to double each number in the array
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log("Doubled numbers:", doubledNumbers);

// Use the reduce function to sum all numbers in the array
const sumOfNumbers = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0);

console.log("Sum of numbers:", sumOfNumbers);
