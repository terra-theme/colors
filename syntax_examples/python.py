# A single-line comment in Python

"""
A multi-line comment
in Python
"""

# Defining a constant
PI = 3.14159

# Defining a variable
radius = 5.0

# Defining a custom class
class Circle:
    @staticmethod
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return PI * self.radius * self.radius

# Control structures
if PI > 3.0:
    print("PI is greater than 3.0")
else:
    print("PI is not greater than 3.0")

# Loops
for i in range(5):
    print(f"Hello, {i}")

j = 0
while j < 3:
    print(f"j: {j}")
    j += 1

# Lists
fruits = ["apple", "banana", "cherry"]
new_fruits = fruits.copy()
new_fruits.append("orange")

# Dictionaries as "hash maps"
person = {
  "name": "John",
  "age": "30",
  "city": "New York"
}

# Using custom classes and methods
circle = Circle(radius)
print(f"Circle area: {circle.area()}")

shape = circle
print(f"Shape area: {shape.area()}")

# Defining a function that returns a dictionary
def square_root(x):
    if x < 0:
        return {"error": "Math: square root of negative number"}
    else:
        return {"result": x ** 0.5}

# Define a list of numbers
numbers = [1, 2, 3, 4, 5]

# Use a list comprehension to double each number in the list
doubled_numbers = [number * 2 for number in numbers]
print("Doubled numbers:", doubled_numbers)

# Use the reduce function to sum all numbers in the list
sum_of_numbers = sum(numbers)
print("Sum of numbers:", sum_of_numbers)
