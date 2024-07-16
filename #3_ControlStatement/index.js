/* DAY 3 : Control Statement */

/*---------------------------------------------------------------- */
/* ACTIVITY 1 -> If-Else Statements */

// TASK 1 : Write program to check if number is +ve, -ve or zero and log the reult to the console.

let num = 5;
if (num == 0) {
  console.log(`${num} is ZERO`);
} else if (num < 0) {
  console.log(`${num} is Negative number`);
} else if (num > 0) {
  console.log(`${num} is Positive number`);
} else {
  console.log(`${num} is Not a number`);
}

// TASK 2 : Write program to check if Person is eligible to vote (age >= 18) and log the reult to the console.

let age = 18;
if (age >= 18) {
  console.log('Person is eligible to vote');
} else {
  console.log('Person is not eligible to vote');
}

/*---------------------------------------------------------------- */

/* ACTIVITY 2 ->  Nested If-Else Statements */

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = 5;
let b = 1;
let c = 8;

if (a > b && a > c) {
  console.log(`${a} is greatest`);
} else if (b > a && b > c) {
  console.log(`${b} is greatest`);
} else {
  console.log(`${c} is greatest`);
}

/*---------------------------------------------------------------- */

/* ACTIVITY 3 ->  Swtich Statements */

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function findMyDay(dayNo) {
  let dayName;

  switch (true) {
    case dayNo == 1:
      dayName = 'Sun';
      break;
    case dayNo == 2:
      dayName = 'Mon';
      break;
    case dayNo == 3:
      dayName = 'Tue';
      break;
    case dayNo == 4:
      dayName = 'Wed';
      break;
    case dayNo == 5:
      dayName = 'Thu';
      break;
    case dayNo == 6:
      dayName = 'Fri';
      break;
    case dayNo == 7:
      dayName = 'Sat';
      break;
    default:
      dayName = 'Today';
      break;
  }

  return dayName;
}

const dayNo = 85;
const whichDay = findMyDay(dayNo);
console.log(`The day for day number ${dayNo} is: ${whichDay}`);

// TASK 5 : Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

// Function to assign grade based on score
function assignGrade(score) {
  let grade;

  // Using switch case to determine grade
  switch (true) {
    case score >= 90:
      grade = 'A';
      break;
    case score >= 80:
      grade = 'B';
      break;
    case score >= 70:
      grade = 'C';
      break;
    case score >= 60:
      grade = 'D';
      break;
    default:
      grade = 'F';
  }

  return grade;
}

// Example usage:
const score = 85;
const grade = assignGrade(score);
console.log(`For a score of ${score}, the grade assigned is: ${grade}`);

/*---------------------------------------------------------------- */

/* Activity 4: Conditional (Ternary) Operator */

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function evenOrOdd(number) {
  return number / 2 == 0 ? 'even' : 'odd';
}

let number = 5;
let ans = evenOrOdd(number);
console.log(ans);

/*---------------------------------------------------------------- */

/* Activity 5: Combining Conditions */

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function isLeapYear(year) {
  let isLeap = false;

  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      isLeap = true;
    }
  }

  return isLeap;
}

// Example usage:
const year = 2024;
const result = isLeapYear(year);
console.log(
  `The year ${year} is ${result ? 'a leap year' : 'not a leap year'}.`
);

/*---------------------------------------------------------------- */
