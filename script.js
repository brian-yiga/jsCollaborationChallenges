"use strict";

/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1**2+2**2+2**2=9.

*/
//How to square numbers num**num
// //todo loop through the array using a for loop
// function squareSum(numbers){
//     let sum = 0;
//     for (let i = 0; i<numbers.length; i++) {
//         const number = numbers[i]*numbers[i]
//         // console.log(number);
//         sum += number;
//     }
//     return sum;
// }

// console.log(squareSum([1, 2, 2]))

//todo loop through the array using a for..of loop

// const numbers = [1, 2, 2];
// function squareSum(numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num**2;
//     }
//     return sum;

// }

// const result = squareSum(numbers);
// console.log(result);

/*
Given the following array;
const colors = ["red", "green", "blue"];

Task: Use array destructuring to assign the first two elements of the array to individual variables (firstColor, secondColor), and ignore the rest of the array.

Expected output:

firstColor should be "red"

secondColor should be "green"
*/
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

/*
Given the following object
const user = { name: "Alice", age: 28 };

Task: Use object destructuring to extract name, age, and a city property. Set the city property to "Unknown" if it doesn't exist in the object.

Expected output:

name should be "Alice"

age should be 28

city should be "Unknown"
*/

const user = {
  name: "Alice",
  age: 28,
};

const { name, age, city = "Unknown" } = user;
console.log(name, age, city);

/*
Given the following object;

const employee = { id: 1, details: { name: "Bob", position: "Developer" } };

Task: Use object destructuring to extract the name and position from the nested details object.

Expected output:

name should be "Bob"

position should be "Developer"
*/
const employee = {
  id: 1,
  details: {
    firstName: "Bob",
    position: "Developer",
  },
};

const { firstName, position } = employee.details;
console.log(firstName, position);

/*
Given the following array:

const people = [ { name: "Eve", age: 30 }, { name: "John", age: 25 } ];

Task: Use array destructuring to extract the name and age of the first person (Eve) into separate variables (personName and personAge), and ignore the rest of the array.

Expected output:

personName should be "Eve"

personAge should be 30
*/

const people = [
  {
    name: "Eve",
    age: 30,
  },
  {
    name: "John",
    age: 25,
  },
];

const [{ name: personName, age: personAge }] = people;

console.log(personName, personAge);

/*
Given two variables:

let x = 3; let y = 7;

Task: Swap the values of x and y using destructuring without using the spread or rest operators.

Expected output:

x should be 7

y should be 3
*/

let x = 3;
let y = 7;

[x, y] = [y, x];
console.log(x, y);
