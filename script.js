'use strict';

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
// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor] = colors;
// console.log(firstColor, secondColor);

/*
Given the following object
const user = { name: "Alice", age: 28 };

Task: Use object destructuring to extract name, age, and a city property. Set the city property to "Unknown" if it doesn't exist in the object.

Expected output:

name should be "Alice"

age should be 28

city should be "Unknown"
*/

// const user = {
//   name: "Alice",
//   age: 28,
// };

// const { name, age, city = "Unknown" } = user;
// console.log(name, age, city);

/*
Given the following object;

const employee = { id: 1, details: { name: "Bob", position: "Developer" } };

Task: Use object destructuring to extract the name and position from the nested details object.

Expected output:

name should be "Bob"

position should be "Developer"
*/
// const employee = {
//   id: 1,
//   details: {
//     firstName: "Bob",
//     position: "Developer",
//   },
// };

// const { firstName, position } = employee.details;
// console.log(firstName, position);

/*
Given the following array:

const people = [ { name: "Eve", age: 30 }, { name: "John", age: 25 } ];

Task: Use array destructuring to extract the name and age of the first person (Eve) into separate variables (personName and personAge), and ignore the rest of the array.

Expected output:

personName should be "Eve"

personAge should be 30
*/

// const people = [
//   {
//     name: "Eve",
//     age: 30,
//   },
//   {
//     name: "John",
//     age: 25,
//   },
// ];

// const [{ name: personName, age: personAge }] = people;

// console.log(personName, personAge);

/*
Given two variables:

let x = 3; let y = 7;

Task: Swap the values of x and y using destructuring without using the spread or rest operators.

Expected output:

x should be 7

y should be 3
*/

// let x = 3;
// let y = 7;

// [x, y] = [y, x];
// console.log(x, y);

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly** one solution**, and you may not use the same element twice.
You can return the answer in any order.
‌
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
*/

//Use a function with nums and target as parameters
//Loop through the array to pick the position of the indices of the nums that add up to the target
//Return the corresponding indices of the two nums

// const nums = [11, 15, 2, 7];
// const target = 9;

// const checkNums = function (nums, target) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       sum = nums[i] + nums[j];
//       if (sum === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(checkNums(nums, target));

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples


makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0


*/

// const makeNegative = function (number) {
//   if (number > 0) {
//     return -number;
//   } else if (number < 0) {
//     return number;
//   } else {
//     return 0;
//   }
// };

// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));

/*Destructuring Nested Objects - Flatten Object
You are given an object with a nested object representing the address of a person. Destructure the object and flatten the address properties (e.g., street, city, zip) into the main object.

Example Input:
const user = { 
    name: "Eve", 
    address: { 
            street: "123 Main St", 
            city: "Springfield", 
            zip: "12345",
        }, 
    };


Example Output:

name: "Eve", street: "123 Main St", city: "Springfield", zip: "12345"*/

// const user = {
//     name: "Eve",
//     address: {
//             street: "123 Main St",
//             city: "Springfield",
//             zip: "12345",
//         },
//     };

//DESTRUCTURE ADDRESS FROM USER
// const { street, city, zip } = user.address;
// console.log(street, city, zip)

// const {name} = user;
// console.log(name);

// console.log(`name: ${name}, street: ${street}, city: ${city}, zip: ${zip}`);

// const { name, address: { street, city, zip },} = user;
// console.log(name, street, city, zip);

//refactored code
// const { name, address: { street, city, zip } } = user;

// console.log(`name: ${name}, street: ${street}, city: ${city}, zip: ${zip}`);

/*Destructuring Arrays - Skipping Elements
You are given an array of numbers. Use array destructuring to extract the first two elements and skip the third one. Put the remaining elements into a new array rest

Example Input:

const numbers = [1, 2, 3, 4, 5];

Example Output:

first: 1, second: 2, rest: [4, 5]*/

// const numbers = [1, 2, 3, 4, 5];

// const [first, second, , ...rest] = numbers;
// console.log(`first: ${first}, second: ${second}, rest: [${rest}]`);

/*Destructuring in Function Parameters

Write a function that takes an object as a parameter and destructures it to extract name, age, and country. Provide default values for age (25) and country ("USA") if they are not provided.

Example Input:

function greetUser({ name, age = 25, country = "USA" }) { return Hello, ${name}. You are ${age} years old and from ${country}.; } const user = { name: "Charlie" };

Expected Output:

"Hello, Charlie. You are 25 years old and from USA."*/

// function greetUser({ name, age = 25, country = "USA" }) {
//     return `Hello, ${name}. You are ${age} years old and from ${country}`;

// }

//     const user = { name: "Charlie" };

//     const result = greetUser(user);
//     console.log(result);

// console.log(user);

/*Destructuring with Functions - Extract and Return Specific Values

You are given a function getUserInfo that receives an object as an argument. The object contains properties name, age, city, and country. Use destructuring to extract name and city, and return a string with this information. If any of these properties are missing, use default values: "Unknown" for name and "Unknown City" for city.*/

/* const getUserInfo = function ({
  name = 'Unknown',
  city = 'Unknown City',
  age,
  country,
}) {
  return `Hello, ${name}. You are ${age} years old, you come from ${city} in ${country}`;
};

const user = {
  // name: 'Brian',
  age: 30,
  // city: 'Kampala',
  country: 'Uganda',
};

console.log(getUserInfo(user));
*/

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
