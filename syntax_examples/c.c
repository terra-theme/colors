// A single-line comment in C

/*
A multi-line comment
in C
*/

#include <math.h>
#include <stdio.h>

// Defining a constant
#define PI 3.14159

// Defining a variable
double radius = 5.0;

// Defining a custom type
typedef struct {
  double radius;
} Circle;

// Defining a function
double areaOfCircle(Circle c) { return PI * c.radius * c.radius; }

// Defining an interface (using function pointers)
typedef struct {
  double (*area)(Circle);
} Shape;

double circleArea(Circle c) { return areaOfCircle(c); }

void printPIComparison() {
  // Control structures
  if (PI > 3.0) {
    printf("PI is greater than 3.0\n");
  } else {
    printf("PI is not greater than 3.0\n");
  }
}

void printHelloLoop() {
  // Loops
  for (int i = 0; i < 5; i++) {
    printf("Hello, %d\n", i);
  }

  int j = 0;
  while (j < 3) {
    printf("j: %d\n", j);
    j++;
  }
}

void printFruits() {
  // Arrays (equivalent to slices in Go)
  const char *fruits[] = {"apple", "banana", "cherry"};
  size_t fruits_len = sizeof(fruits) / sizeof(fruits[0]);

  printf("Fruits:\n");
  for (size_t i = 0; i < fruits_len; i++) {
    printf("  %s\n", fruits[i]);
  }
}

void printPerson() {
  // Struct (equivalent to maps in Go)
  struct {
    const char *name;
    const char *age;
    const char *city;
  } person = {"John", "30", "New York"};

  printf("Person:\n");
  printf("  Name: %s\n", person.name);
  printf("  Age: %s\n", person.age);
  printf("  City: %s\n", person.city);
}

void printShapeArea(Circle circle) {
  // Using custom types and interfaces
  Shape shape = {circleArea};
  printf("Circle area: %f\n", shape.area(circle));
}

void printDoubledNumbers() {
  // Define an array of numbers
  int numbers[] = {1, 2, 3, 4, 5};
  size_t len = sizeof(numbers) / sizeof(numbers[0]);

  // Use a loop to double each number in the array
  int doubledNumbers[len];
  for (size_t i = 0; i < len; i++) {
    doubledNumbers[i] = numbers[i] * 2;
  }

  printf("Doubled numbers: ");
  for (size_t i = 0; i < len; i++) {
    printf("%d ", doubledNumbers[i]);
  }
  printf("\n");
}

int reduce(const int *array, size_t len, int (*reducer)(int, int),
           int initial) {
  int accumulator = initial;
  for (size_t i = 0; i < len; i++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}

int sum(int a, int b) { return a + b; }

void printSumOfNumbers() {
  // Define an array of numbers
  int numbers[] = {1, 2, 3, 4, 5};
  size_t len = sizeof(numbers) / sizeof(numbers[0]);

  // Use a custom reduce function to sum all numbers in the array
  int sumOfNumbers = reduce(numbers, len, sum, 0);
  printf("Sum of numbers: %d\n", sumOfNumbers);
}

int main() {
  printPIComparison();
  printHelloLoop();
  printFruits();
  printPerson();

  Circle circle = {radius};
  printShapeArea(circle);
  printDoubledNumbers();
  printSumOfNumbers();

  return 0;
}
