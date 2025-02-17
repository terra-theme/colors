import { Shape } from "./types";

/* eslint-disable @typescript-eslint/no-unused-vars */
// A single-line comment in TypeScript

/*
A multi-line comment
in TypeScript
*/

// Defining a constant
const PI: number = 3.14159;

// Defining a variable
/* eslint-disable prefer-const */
let radius: number = 5.0;

const bool_a = true;
const bool_b = false;

const result = 1 + 2 * 3;

/**
 * A documentation string for templateString
 * @param name The name of the person
 * @returns A greeting message
 */
const templateString = `Hello, ${name}!`;

// ERROR: This is an error comment
// FIXME: This needs to be fixed
// DEPRECATED: This is DEPRECATED
// TODO: This needs to be doubledNumbers
// NOTE: This is a NOTE
// INFO: This is some information
// WARNING: This is a WARNING

// Defining a custom type
class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  printArea() {
    console.log(
      `The area of the circle is ${this.radius * this.radius * Math.PI}`,
    );
  }
}

// Defining a function
function areaOfCircle(c: Circle): number {
  return PI * c.radius * c.radius;
}

areaOfCircle(new Circle(radius));

// Defining a "trait"-like mechanism using a class
abstract class Shape {
  abstract area(): number;
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

let j: number = 0;
while (j < 3) {
  console.log(`j: ${j}`);
  j++;
}

// Arrays
const fruits: string[] = ["apple", "banana", "cherry"];
const newFruits: string[] = fruits.slice();
newFruits.push("orange");

// Objects as hash maps
const person: { [key: string]: string } = {
  name: "John",
  age: "30",
  city: "New York",
};

// Using custom types and "traits"
const circle: Circle = new Circle(radius);
console.log(`Circle area: ${circle.printArea()}`);

const shape: Shape = circle;
console.log(`Shape area: ${shape.printArea()}`);

// Defining a function that returns a Promise
function squareRoot(x: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (x < 0) {
      reject("Math: square root of negative number");
    } else {
      resolve(Math.sqrt(x));
    }
  });
}

// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Use the map function to double each number in the array
const doubledNumbers: number[] = numbers.map((number: number): number => {
  return number * 2;
});

console.log("Doubled numbers:", doubledNumbers);

// Use the reduce function to sum all numbers in the array
const sumOfNumbers: number = numbers.reduce(
  (accumulator: number, currentNumber: number): number => {
    return accumulator + currentNumber;
  },
  0,
);

console.log("Sum of numbers:", sumOfNumbers);

// object with variables and methods
const objWithVarsAndMethods = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// Car Constructor
class Car {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

const myCar = new Car("My Car", "Red");
