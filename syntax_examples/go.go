// A single-line comment in Go

/*
A multi-line comment
in Go
*/

package main

import (
	"fmt"
	"math"
)

// Defining a constant
const PI float64 = 3.14159

// Defining a variable
var radius float64 = 5.0

// Defining a custom type
type Circle struct {
	radius float64
}

// Defining a function
func areaOfCircle(c Circle) float64 {
	return PI * c.radius * c.radius
}

// Defining an interface
type Shape interface {
	area() float64
}

func (c Circle) area() float64 {
	return areaOfCircle(c)
}

func main() {
	// Control structures
	if PI > 3.0 {
		fmt.Println("PI is greater than 3.0")
	} else {
		fmt.Println("PI is not greater than 3.0")
	}

	// Loops
	for i := 0; i < 5; i++ {
		fmt.Printf("Hello, %d\n", i)
	}

	j := 0
	for j < 3 {
		fmt.Printf("j: %d\n", j)
		j++
	}

	// Slices
	fruits := []string{"apple", "banana", "cherry"}
	newFruits := append(fruits, "orange")

	// Maps
	person := map[string]string{
		"name": "John",
		"age":  "30",
		"city": "New York",
	}

	// Using custom types and interfaces
	circle := Circle{radius: radius}
	fmt.Printf("Circle area: %f\n", circle.area())

	shape := Shape(circle)
	fmt.Printf("Shape area: %f\n", shape.area())

	// Define a slice of numbers
	numbers := []int{1, 2, 3, 4, 5}

	// Use the map function to double each number in the slice
	doubledNumbers := make([]int, len(numbers))
	for i, number := range numbers {
		doubledNumbers[i] = number * 2
	}
	fmt.Printf("Doubled numbers: %v\n", doubledNumbers)

	// Use a custom reduce function to sum all numbers in the slice
	sumOfNumbers := reduce(numbers, func(a, b int) int {
		return a + b
	}, 0)
	fmt.Printf("Sum of numbers: %d\n", sumOfNumbers)
}

// Custom reduce function for int slices
func reduce(slice []int, reducer func(int, int) int, initial int) int {
	accumulator := initial
	for _, value := range slice {
		accumulator = reducer(accumulator, value)
	}
	return accumulator
}
