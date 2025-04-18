"use strict";

/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1**2+2**2+2**2=9.

*/
//How to square numbers num**num
// //* loop through the array using a for loop
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

//* loop through the array using a for..of loop

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

/*const getUserInfo = function ({name = 'Unknown', city = 'Unknown City', age, country}) {
    return `Hello, ${name}. You are ${age} years old, you come from ${city} in ${country}`;
}

const user = {
    // name: 'Brian',
    age: 30,
    // city: 'Kampala',
    country: 'Uganda'
};

console.log(getUserInfo(user));*/

//DATA TYPES CHALLENGE
/*Exercise 1A: 
Create a function that takes a value as input and returns a string with the type of the value (e.g., "string", "number", "object", etc.). If the type is an object, check whether it's an array or null and return an appropriate message.*/

//Create a function that takes a value as input;
//use IF statement to check the type of input;
//capture input using a prompt;
//return a string with the the data type of the value;

// function checkInputDataType (value) {
//     // if (value === null) {
//     //     console.log (typeof value);
//     // }
//     // if (Array.isArray(value)) {
//     //     console.log (typeof value);
//     // }
//     console.log (typeof value);

// };

// checkInputDataType({name: 'brian'});

/*Exercise 1B: 
Implement a type-checking function that verifies whether a value is a primitive type (string, number, boolean, null, symbol, undefined). Use typeof and instanceof where applicable.*/

/*Exercise 1C: Write a function that takes a value and converts it to the corresponding primitive type (if applicable) without using built-in functions (e.g., String(), Number(), etc.).*/

/*function convertToPrimitive(value) {
  if (typeof value === "number") {
    return value + "";
    // String conversion (for numbers): We convert a number to a string by adding it to an empty string (value + '').

}
if (typeof value === 'string') {
    return value * 1;
    // Number conversion (for strings): We convert a string to a number by multiplying it by 1 (value * 1).
}
if (value === null || value === undefined) {
    return false;
    // Boolean conversion: If the value is null or undefined, we return false because they are falsy values. Otherwise, booleans stay as they are.
}
if (typeof value === 'boolean') {
    return value;
} 
return value;
}

console.log(convertToPrimitive(null));*/


//STRING MANIPULATION CHALLENGES
/*Exercise 2A: 
Write a function that checks if a string is a palindrome (the string is the same forwards and backwards), ignoring spaces and punctuation.*/


//* FOOTBALL BETTING APP CHALLENGE
//*TASKS

/*
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
*/

// const game = {
//     name: brian
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// },


/*This is more of a thinking challenge than a coding challenge 🤓
Your tasks:

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!

And now explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.



(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
})();*/

(function () {
    let header = document.querySelector('h1');
    header.style.color = 'green';
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();

/*Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶
")

Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉*/

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function ([dogsJulia], [dogsKate]) {
    const dogsJuliaSorted = dogsJulia.slice(1, -1);
    const combinedDogs = [...dogsJuliaSorted, ...dogsKate];
    combinedDogs.forEach((dogAge, i)=>{
        dogAge >= 3 ? console.log(`Dog number ${[i + 1]} is an adult, and is ${dogAge} years old`) : console.log(`Dog number ${[i + 1]} is still a puppy`);
    })
}

checkDogs([dogsJulia], [dogsKate]);


