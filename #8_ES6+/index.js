/* DAY 8 : Es6+ Features */

/*---------------------------------------------------------------- */

/* Activity 1: Template Literals */

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name1 = 'John Smith';
const age = 30;

const personInfo = `Name: ${name1}, Age: ${age}`;
console.log(personInfo);

// Task 2: Create a multi-line string using template literals and log it to the console.

const multiLineString = `
This is a multi-line string.
It spans multiple lines,
thanks to template literals.
`;

console.log(multiLineString);

/*---------------------------------------------------------------- */

/* Activity 2: Destructuring */

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second] = numbers;

console.log(first);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: 'The Hindu',
  author: 'ABC',
};

console.log(book.author);
/*---------------------------------------------------------------- */

/* Activity 3: Spread and Rest Operators */

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newArray = [...numbers, 0.1, 0.2, 0.3];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

console.log('Sum: ', sum(2, 3, 4, 5));

/*---------------------------------------------------------------- */

/* Activity 4: Default Parameters */

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a, b = 10) {
  return a * b;
}

console.log(product(10, 5));
console.log(product(10));
/*---------------------------------------------------------------- */

/* Activity 5: Enhanced Object Literals */

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// Variables for shorthand properties
const name = 'Robo Titan';
const type = 'AI Assistant';
const batteryLife = 12;

// Enhanced Object Literals
const robot = {
  // Shorthand properties
  name,
  type,
  batteryLife,

  // Method definitions
  introduce() {
    console.log(
      `Hello, I am ${this.name}, a ${this.type} with a battery life of ${this.batteryLife} hours.`
    );
  },

  // Method with parameters
  charge(hours) {
    if (hours > 0) {
      console.log(`Charging for ${hours} hours...`);
      this.batteryLife += hours;
      console.log(`Battery life is now ${this.batteryLife} hours.`);
    } else {
      console.log('Invalid charging hours.');
    }
  },

  // Computed property name
  ['status' + '_check']() {
    return this.batteryLife > 5 ? 'Battery is sufficient.' : 'Battery is low!';
  },

  // Setter for updating battery life
  set updateBatteryLife(newLife) {
    if (newLife >= 0) {
      console.log(`Updating battery life to ${newLife} hours.`);
      this.batteryLife = newLife;
    } else {
      console.log('Invalid battery life value.');
    }
  },

  // Getter for retrieving the robot's full description
  get fullDescription() {
    return `Name: ${this.name}, Type: ${this.type}, Battery Life: ${this.batteryLife} hours.`;
  },
};

// Logging the object
console.log(robot);

// Using the object's methods
robot.introduce(); // Method call
robot.charge(3); // Method call with parameters
console.log(robot['status_check']()); // Computed property method call

// Using getter and setter
robot.updateBatteryLife = 15; // Setter call
console.log(robot.fullDescription); // Getter call

// Task 9: Create an object with computed property names based on variables and log the object to the console.

// Variables for computed property names
const propName1 = 'firstName';
const propName2 = 'lastName';
const ageProp = 'age';
const countryCode = 'countryCode';

// Expression for a complex property name
const prefix = 'user';
const uniqueID = '123';

// Create an object with computed property names
const user = {
  // Using variables to compute property names
  [propName1]: 'John',
  [propName2]: 'Doe',

  // Using expressions for property names
  ['user_' + ageProp]: 28,
  [`user_${countryCode}`]: 'US',

  // Complex computed property name
  [prefix + '_' + uniqueID]: {
    [propName1]: 'Jane',
    [propName2]: 'Smith',
    age: 30,
    country: 'UK',
  },

  // Method using computed property name
  ['getFullName']() {
    return `${this[propName1]} ${this[propName2]}`;
  },

  // Method with computed property name and parameters
  [`update${propName1.charAt(0).toUpperCase() + propName1.slice(1)}`](
    newFirstName
  ) {
    this[propName1] = newFirstName;
    console.log(`First name updated to ${this[propName1]}`);
  },
};

// Logging the object to the console
console.log(user);

// Accessing computed property names
console.log(`Full Name: ${user.getFullName()}`); // Method call
console.log(`Age: ${user['user_age']}`);
console.log(`Country Code: ${user['user_countryCode']}`);

// Accessing complex computed property names
console.log(
  `Inner User: ${user['user_123'][propName1]} ${user['user_123'][propName2]}`
);

// Using method to update a property
user.updateFirstName('Michael');
console.log(`Updated Full Name: ${user.getFullName()}`); // Method call after update

/*---------------------------------------------------------------- */
