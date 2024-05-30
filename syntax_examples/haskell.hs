-- A single-line comment in Haskell

{- A multi-line comment
   in Haskell -}

module Main where

import qualified Data.Map.Strict as Map

-- Defining a constant
pi' :: Double
pi' = 3.14159

-- Defining a variable
radius :: Double
radius = 5.0

-- Defining a custom type
data Circle = Circle Double

-- Defining a typeclass
class Shape a where
  area :: a -> Double

instance Shape Circle where
  area (Circle r) = pi' * r * r

-- Control structures
controlStructures :: IO ()
controlStructures = if pi' > 3.0
  then putStrLn "PI is greater than 3.0"
  else putStrLn "PI is not greater than 3.0"

-- Loops
loops :: IO ()
loops = mapM_ (putStrLn . ("Hello, " ++) . show) [0..4]

jLoop :: Int -> IO ()
jLoop j
  | j < 3 = do
      putStrLn $ "j: " ++ show j
      jLoop (j + 1)
  | otherwise = return ()

-- Arrays
fruits :: [String]
fruits = ["apple", "banana", "cherry"]

newFruits :: [String]
newFruits = fruits ++ ["orange"]

-- Maps
person :: Map.Map String String
person = Map.fromList [("name", "John"), ("age", "30"), ("city", "New York")]

-- Additional example: map and reduce functions

-- Define a list of numbers
numbers :: [Int]
numbers = [1, 2, 3, 4, 5]

-- Use the map function to double each number in the list
doubledNumbers :: [Int]
doubledNumbers = map (*2) numbers

-- Use the foldl function (similar to reduce in Haskell) to sum all numbers in the list
sumOfNumbers :: Int
sumOfNumbers = foldl (+) 0 numbers

main :: IO ()
main = do
  controlStructures
  loops
  jLoop 0
  putStrLn $ "Circle area: " ++ show (area (Circle radius))
  putStrLn $ "Doubled numbers: " ++ show doubledNumbers
  putStrLn $ "Sum of numbers: " ++ show sumOfNumbers
