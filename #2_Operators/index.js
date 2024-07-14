/* DAY 2 : Operators */

/*---------------------------------------------------------------- */
/* ACTIVITY 1 -> ARITHMETIC */

// TASK 1 : Write program to add  2 numebrs and log the results to console
let num1 = 2;
let num2 = 3;
const add = num1 + num2;
console.log('ADD ' + add);

// TASK 2 : Write program to subract  2 numebrs and log the results to console
let sub = num1 - num2;
console.log('sub ' + sub);

sub = num2 - num1;
console.log('sub ' + sub);

// TASK 3 : Write program to multiply  2 numebrs and log the results to console
const multi = num2 * num1;
console.log('multi ' + multi);

// TASK 4 : Write program to divide  2 numebrs and log the results to console
let div = num1 / num2;
console.log('div ' + div);

div = num2 / num1;
console.log('div ' + div);

// TASK 5 : Write program to find reminder when one number divied by another and log the results to console
let rem = num2 % num1;
console.log('rem ' + rem);

/*---------------------------------------------------------------- */

/* ACTIVITY 2 -> ASSIGNMENT OPERATOR*/

// TASK 6 : Use '+=' oppartor to add  number to variable and log the results to console

num1 += num2;
console.log(num1);

// TASK 7 : Use '-=' oppartor to subtract  number to variable and log the results to console
num1 -= num2;
console.log(num1);

/*---------------------------------------------------------------- */

/* ACTIVITY 3 -> COMPERATION OPERATOR*/

// TASK 7 : Write a program to compare two numbers using '<' and '>' and log the results to console

console.log(num2 > num1);
console.log(num2 < num1);

// TASK 8 : Write a program to compare two numbers using '<=' and '>=' and log the results to console

console.log(num2 >= num1);
console.log(num2 <= num1);

// TASK 9: Write a program to compare two numbers using '==' and '===' and log the results to console

let a = 5;
let b = '5';

console.log(a == b);
console.log(a === b);

/*---------------------------------------------------------------- */

/* ACTIVITY 4 -> LOGICAL OPERATOR*/

// TASK 10 : Write a program that use "&&" operator to combine two conditions and log the results to console

let salary = 10;
console.log(salary > 5 && salary < 15);

// TASK 11 : Write a program that use "||" operator to combine two conditions and log the results to console

salary = 16;
console.log(salary > 5 || salary < 15);

// TASK 12 : Write a program that use "!" operator to combine two conditions and log the results to console

console.log(!false);

/*---------------------------------------------------------------- */

/* ACTIVITY 5 -> TERNARY OPERATOR*/

// TASK 13 : write program that uses ternary operator to check if number is negative or positive and  log the results to console
let num = 7;
console.log(num < 0 ? 'negative' : 'positive');

num = -100;
console.log(num < 0 ? 'negative' : 'positive');

/*____________END____OF____DAY_____TWO_____________________________________*/
