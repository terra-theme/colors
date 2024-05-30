#!/bin/bash

# A single-line comment in Bash

: '
A multi-line comment
in Bash
'

# Defining a constant
readonly PI=3.14159

# Defining a variable
radius=5.0

# Control structures
if (( $(echo "$PI > 3.0" | bc -l) )); then
  echo "PI is greater than 3.0"
else
  echo "PI is not greater than 3.0"
fi

# Loops
for i in {0..4}; do
  echo "Hello, $i"
done

j=0
while ((j < 3)); do
  echo "j: $j"
  j=$((j + 1))
done

# Arrays
fruits=("apple" "banana" "cherry")
new_fruits=("${fruits[@]}" "orange")

# Associative arrays (requires Bash 4.0+)
declare -A person
person=(["name"]="John" ["age"]="30" ["city"]="New York")

# Basic arithmetic operation (circle area)
circle_area=$(echo "$PI * $radius * $radius" | bc -l)
echo "Circle area: $circle_area"

# Additional example: map and reduce functions

# Define an array of numbers
numbers=(1 2 3 4 5)

# Use a for loop to double each number in the array
doubled_numbers=()
for number in "${numbers[@]}"; do
  doubled_numbers+=($(echo "2 * $number" | bc))
done

echo "Doubled numbers: ${doubled_numbers[*]}"

# Use a for loop to sum all numbers in the array
sum_of_numbers=0
for number in "${numbers[@]}"; do
  sum_of_numbers=$(echo "$sum_of_numbers + $number" | bc)
done

echo "Sum of numbers: $sum_of_numbers"
