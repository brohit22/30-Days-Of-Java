/* DAY 4 : LOOPS */

/*---------------------------------------------------------------- */
/* ACTIVITY 1 -> For Loop */

// TASK 1 : Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// TASK 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}

/*---------------------------------------------------------------- */

/* Activity 2: While Loop */

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

/*---------------------------------------------------------------- */

/* Activity 3: Do...While Loop */

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
function calculateFactorial(n) {
  let factorial = 1;
  let i = 1;

  // do...while loop to calculate factorial
  do {
    factorial *= i;
    i++;
  } while (i <= n);

  return factorial;
}

// Example usage:
const number = 5;
const result = calculateFactorial(number);
console.log(`The factorial of ${number} is: ${result}`);

/*---------------------------------------------------------------- */

/* Activity 4: Nested Loops */

// Task 7: Write a program to print a pattern using nested for loops:
let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}

/*---------------------------------------------------------------- */

/* Activity 5: Loop Control */

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
