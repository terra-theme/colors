// A single-line comment in Rust

/*
A multi-line comment
in Rust
*/

// Defining a constant
const PI: f64 = 3.14159;

// Defining a variable
let radius: f64 = 5.0;

// Defining a custom type
struct Circle {
    radius: f64,
}

// Defining a function
fn area_of_circle(c: Circle) -> f64 {
    PI * c.radius * c.radius
}

// Defining a trait
trait Shape {
    fn area(&self) -> f64;
}

impl Shape for Circle {
    fn area(&self) -> f64 {
        area_of_circle(*self)
    }
}

fn main() {
    // Control structures
    if PI > 3.0 {
        println!("PI is greater than 3.0");
    } else {
        println!("PI is not greater than 3.0");
    }

    // Loops
    for i in 0..5 {
        println!("Hello, {}", i);
    }

    let mut j = 0;
    while j < 3 {
        println!("j: {}", j);
        j += 1;
    }

    // Vectors
    let fruits = vec!["apple", "banana", "cherry"];
    let mut new_fruits = fruits.clone();
    new_fruits.push("orange");

    // Hash maps
    let mut person = std::collections::HashMap::new();
    person.insert("name", "John");
    person.insert("age", "30");
    person.insert("city", "New York");

    // Using custom types and traits
    let circle = Circle { radius: radius };
    println!("Circle area: {}", circle.area());

    let shape: &dyn Shape = &circle;
    println!("Shape area: {}", shape.area());

    // Define a vector of numbers
    let numbers = vec![1, 2, 3, 4, 5];

    // Use the map function to double each number in the vector
    let doubled_numbers: Vec<i32> = numbers.iter().map(|number| number * 2).collect();
    println!("Doubled numbers: {:?}", doubled_numbers);

    // Use the fold function (similar to reduce in Rust) to sum all numbers in the vector
    let sum_of_numbers: i32 = numbers.iter().fold(0, |accumulator, current_number| {
        accumulator + current_number
    });
    println!("Sum of numbers: {}", sum_of_numbers);
}
