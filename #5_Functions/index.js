/* DAY 5 : Functions */

/*---------------------------------------------------------------- */
/* Activity 1: Function Declaration */
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function evenOrOdd(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}

let number = 5;
let ans = evenOrOdd(number);
console.log(ans);

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
  return num * num;
}
let num = 3;
ans = square(num);
console.log(ans);

/*---------------------------------------------------------------- */

/*  Activity 2: Function Expression */

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

let number1 = 10;
let number2 = 20;

const maxNumber = findMax(number1, number2);
console.log(maxNumber);

// Task 4: Write a function expression to concatenate two strings and return the result.

const concatString = function (string1, string2) {
  return string1 + string2;
};
let str1 = 'colors';
let second = 'Cineplx';

console.log(concatString(str1, second));

/*---------------------------------------------------------------- */

/*  Activity 3: Arrow Functions */

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const twoSum = (num1, num2) => {
  return num1 + num2;
};

number1 = 5;
number2 = 7;

const sum = twoSum(number1, number2);
console.log(sum);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsChar = (str, char) => {
  return str.includes(char);
};

let myString = 'Hello, World!';
let myChar = 'o';

const result = containsChar(myString, myChar);
console.log(result);

/*---------------------------------------------------------------- */

/* Activity 4: Function Parameters and Default Values */

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const multiply = (num1, num2 = 1) => {
  return num1 * num2;
};

// Example usage:
number1 = 5;
number2 = 3;

const result1 = multiply(number1);
console.log(result1);

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greetPerson = (name, age = 'unknown') => {
  return `Hello, ${name}! You are ${age} years old.`;
};

let personName1 = 'Alice';
let personAge1 = 25;

const greeting1 = greetPerson(personName1, personAge1);
console.log(greeting1); // Output: "Hello, Alice! You are 25 years old."

let personName2 = 'Bob';

const greeting2 = greetPerson(personName2);
console.log(greeting2); // Output: "Hello, Bob! You are unknown years old."

/*---------------------------------------------------------------- */

/* Activity 5: Higher-Order Functions */

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const repeatFunction = (fn, times) => {
  for (let i = 0; i < times; i++) {
    fn();
  }
};

// Example usage:
const sayHello = () => {
  console.log('Hello!');
};

repeatFunction(sayHello, 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const applyFunctions = (func1, func2, value) => {
  const result1 = func1(value); // Apply func1 to the value
  const result2 = func2(result1); // Apply func2 to the result of func1
  return result2; // Return the final result
};

// Example functions
const double = (x) => x * 2;
const sq = (x) => x * x;

// Example usage:
num1 = 5;
const finalResult = applyFunctions(double, sq, num1);
console.log(finalResult); // Output: 100 (square(double(5)) = square(10) = 100)

/*---------------------------------------------------------------- */
