/* DAY 1 : Variables and Data Types */

/*---------------------------------------------------------------- */
/* ACTIVITY 1 */

// TASK 1 : Declare variable using var, assign it a number, and log the value to the console
var num1 = 20;
console.log(num1);

// TASK 2 : Declare variable using let, assign it a string, and log the value to the console
let str1 = 'First day of js';
console.log(str1);

/*---------------------------------------------------------------- */

/* ACTIVITY 2 */

// TASK 3 : Declare variable using const, assign it a boolean, and log the value to the console
const trueOrFalse = true;
console.log(trueOrFalse);

/*---------------------------------------------------------------- */

/* ACTIVITY 3 */

// TASK 4 : Create variables of different data types (number, boolean,string, object, array) and log each variable's type using the typeOf operator.
const num = 2;
console.log(typeof num);
console.log(typeof trueOrFalse);
console.log(typeof str1);

const car = {
  color: 'red',
  model: 'GS1',
  company: 'BMW',
};
console.log(typeof car);

const fruits = ['🍎', '🥭', '🍇', '🍊', '🍒'];
console.log(typeof fruits);

/*---------------------------------------------------------------- */

/* ACTIVITY 4 */

// TASK 5 : Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console
let myName = 'John';
console.log(myName);

myName = 'John Wick';
console.log(myName);

/*---------------------------------------------------------------- */

/* ACTIVITY 5 */

// TASK 6 : Try reassigning a variable declared with const and observe the error.
const pi = 3.14;
console.log(pi);

pi = 6.28;
console.log(pi);

/*____________END____OF____DAY_____ONE_____________________________________*/
