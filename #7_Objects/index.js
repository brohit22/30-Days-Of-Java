/* DAY 6 : Objects */

/*---------------------------------------------------------------- */

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
};

console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

/*---------------------------------------------------------------- */
/* Activity 2: Object Methods */

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
};

console.log(book);

const titleAndAuthor = book.getTitleAndAuthor();
console.log(titleAndAuthor);

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const newBook = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

console.log(newBook);

newBook.updateYear(2020);

console.log(newBook);

/*---------------------------------------------------------------- */

/* Activity 3: Nested Objects */

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const book1 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

const book2 = {
  title: '1984',
  author: 'George Orwell',
  year: 1949,
  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

const book3 = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
  getTitleAndAuthor: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

const library = {
  name: 'City Library',
  books: [book1, book2, book3],
};

// Logging the library object to the console
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(`Library Name: ${library.name}`);

library.books.forEach((book, index) => {
  console.log(`Book ${index + 1} Title: ${book.title}`);
});

/*---------------------------------------------------------------- */

/* Activity 4: The this Keyword */

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book1.getTitleAndYear = function () {
  return `Title: ${this.title}, Year: ${this.year}`;
};

console.log(book1.getTitleAndYear());

/*---------------------------------------------------------------- */

/* Activity 5: Object Iteration */

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let property in book1) {
  if (book1.hasOwnProperty(property)) {
    console.log(`${property}: ${book1[property]}`);
  }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book1));
console.log(Object.values(book1));
