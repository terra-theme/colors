-- A single-line comment in Lua

--[[
A multi-line comment
in Lua
]]

-- Defining a constant
local PI = 3.14159

-- Defining a variable
local radius = 5.0

-- Defining a custom type
local Circle = { radius = radius }

-- Defining a function
function areaOfCircle(c)
    return PI * c.radius * c.radius
end

-- Defining a "trait"-like mechanism using a table
local Shape = {}

function Shape:area()
    -- Default implementation
    return 0
end

setmetatable(Circle, { __index = Shape })

-- Control structures
if PI > 3.0 then
    print("PI is greater than 3.0")
else
    print("PI is not greater than 3.0")
end

-- Loops
for i = 0, 4 do
    print("Hello, " .. i)
end

local j = 0
while j < 3 do
    print("j: " .. j)
    j = j + 1
end

-- Tables
local fruits = { "apple", "banana", "cherry" }
local newFruits = { table.unpack(fruits) }
table.insert(newFruits, "orange")

-- Tables as dictionaries
local person = {
    name = "John",
    age = "30",
    city = "New York",
}

-- Using custom types and "traits"
print("Circle area: " .. Circle:area())

local shape = Circle
print("Shape area: " .. shape:area())

-- Defining a function that returns a boolean
function isPositive(x)
    return x > 0
end

-- Define an array of numbers
local numbers = { 1, 2, 3, 4, 5 }

-- Use the map function to double each number in the array
local doubledNumbers = {}
for i, number in ipairs(numbers) do
    table.insert(doubledNumbers, number * 2)
end

print("Doubled numbers:", table.concat(doubledNumbers, ", "))

-- Use the reduce function to sum all numbers in the array
local sumOfNumbers = 0
for i, number in ipairs(numbers) do
    sumOfNumbers = sumOfNumbers + number
end

print("Sum of numbers:", sumOfNumbers)
