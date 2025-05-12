'use strict';
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

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
/*
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

// 1.
const players1 = game.players[0];
console.log(players1);
const players2 = game.players[1];
console.log(players2);

// 2. Bayern Munich
// const gk = players1[0];
// console.log(gk);
const [gk, ...fieldPlayers] = players1;
console.log(fieldPlayers);
console.log(gk);

// 3. ALL PLAYERS

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;

console.log(team1);
console.log(draw);
console.log(team2);

// 6.
// function to print goals and total goals scored

const printGoals = function (...allPlayers) {
  // print each player name
  for (let i = 0; i < allPlayers.length; i++)
    console.log(`Goal ${i + 1}: ${allPlayers[i]}`);

  // Total number of
  console.log(`Total goals scored: ${allPlayers.length}`);
};
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// 7. Fuction to print the team more likely to win based on lower odds

const moreLikelyWiner = function () {
  const team1 = game.team1;
  const team2 = game.team2;
  const odds1 = game.odds.team1;
  const odds2 = game.odds.team2;

  // Team with lower odds

  let winner = team1;
  if (odds1 > odds2) {
    winner = team2;
  }
  console.log(winner);
};
moreLikelyWiner();

/*
Coding Challenge #2

Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:

1.Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 

Odd of victory Bayern Munich: 1.33

Odd of draw: 3.25

Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
  
GOOD LUCK 😀

*/
// const goalCount = {};
// for (const player of game.scored) {
//   console.log(player);
//   goalCount[player] = (goalCount[player] ?? 0) + 1

//   //console.log(`Goal ${goal} : ${scored}`);
// }
// console.log(goalCount);
//"Goal 1: Lewandowski";

// 1.
/*

let goalNumber = 1;
for (const player of game.scored) {
  console.log(player);

  console.log(`Goal ${goalNumber}: ${player}`);
  goalNumber++;
}

const oddsAverage = function ({ odds }) {
  let sum = 0;
  let counter = 0;
  for (const odd of Object.values(game.odds)) {
    console.log(odd);
    sum += odd;
    counter++;
  }
  return sum / counter;
  console.log(counter);
  console.log(sum);
};

console.log(oddsAverage(game.odds));

// const average = (game.odds.team1 + game.odds.x + game.odds.team2) / 3;
// console.log(average);
console.log(`Odd of victory ${game.team1}:${game.odds.team1}`);
console.log(`Odd of draw :${game.odds.x}`);
console.log(`Odd of victory ${game.team2}:${game.odds.team2}`);

/*
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

Your tasks:
1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

[FIRST HALF] 17: ⚽ GOAL

 

GOOD LUCK 😀

const gameEvents = new Map([

[17, '⚽ GOAL'],

[36, '🔁 Substitution'],

[47, '⚽ GOAL'],

[61, '🔁 Substitution'],

[64, '🔶 Yellow card'],

[69, '🔴 Red card'],

[70, '🔁 Substitution'],

[72, '🔁 Substitution'],

[76, '⚽ GOAL'],

[80, '⚽ GOAL'],

[92, '🔶 Yellow card'],

]);
*/

//1. Create an array 'events' of the different game events that happened (no duplicates)
/*

const gameEvents = new Map([
  [17, "⚽ GOAL"],

  [36, "🔁 Substitution"],

  [47, "⚽ GOAL"],

  [61, "🔁 Substitution"],

  [64, "🔶 Yellow card"],

  [69, "🔴 Red card"],

  [70, "🔁 Substitution"],

  [72, "🔁 Substitution"],

  [76, "⚽ GOAL"],

  [80, "⚽ GOAL"],

  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];

console.log(events);

//2. remove yellow card at 64'

gameEvents.delete(64);
console.log(gameEvents);

//3 ("An event happened, on average, every 9 minutes");

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} HALF] ${min}: ${event}`);
  //[FIRST HALF] 17: ⚽ GOAL
}


*/

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):

underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase    ✅
firstName         ✅✅
someVariable      ✅✅✅
calculateAge      ✅✅✅✅
delayedDeparture  ✅✅✅✅✅

Hints:

§ Remember which character defines a new line in the textarea 😉

§ The solution only needs to work for a variable made out of 2 words, like a_b

§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


// */
// // Create a function
// // add event listerner to button
// // capture input from text area

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// const btn = document.querySelector("button");

// const camelCaseConvert = function () {
//   const text = document.querySelector("textarea").value;
//   //const splitText = text.trim().split('_');
//   const lines = text.split("\n");
//   for (const [i, line] of lines.entries()) {
//     const symbol = "✅";
//     const splitText = line.trim().split("_");
//     //const cap = splitText[1];
//     // const firstLetter = cap[0].toUpperCase() + cap.slice(1);
//     //const finalText = splitText[0] + firstLetter;
//     const finalText =
//       splitText[0] +
//       splitText[1].charAt(0).toUpperCase() +
//       splitText[1].slice(1);
//     // console.log(finalText);

//     console.log(`${finalText} ${symbol.repeat(i + 1)}`);
//   }
//   // const cap = splitText[1];
//   // const firstLetter = cap[0].toUpperCase() + cap.slice(1);
//   // const finalText = splitText[0] + firstLetter;

//   //console.log(line);
// };
// btn.addEventListener("click", camelCaseConvert);

/*
1. Even or Odd
Problem Statement:
Given an integer, determine if it is even or odd.

Example:

evenOrOdd(6); // Output: "Even"
evenOrOdd(7); // Output: "Odd"

*/
/*
const evenOrOdd = function (integer) {
  if (integer % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
};

evenOrOdd(6);
evenOrOdd(7);

*/

/*

2. Prime Number Checker

Problem Statement:
Write a function to check if a number is prime or not.

Example:

isPrime(7); // Output: true
isPrime(10); // Output: false
*/

// const isPrime = function (integer) {
//   if (integer <= 1) {
//     return false;
//   }

// Numbers less than 1 or equal to 1 are not prime
//   for (let i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPrime(11));

/*
3. Largest Number in Array

Problem Statement:
Find the largest number in a given array.

Example:

largestNumber([1, 5, 9, 4]); // Output: 9
*/
/*
const largestNumber = function (arr) {
  let large = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
};
console.log(largestNumber([1, 5, 9, 4, 12, 5]));

*/

/*
4. Count Digits in a Number

Problem Statement:
Given a number, count how many digits it contains.

Example:

countDigits(456); // Output: 3
countDigits(12345); // Output: 5
*/

/*
const countDigits = function (digit) {
  console.log(digit.toString().length);
};
countDigits(1230000);
*/
/*

5. Check Armstrong Number

Problem Statement:
Check if a number is an Armstrong number. An Armstrong number of three digits is a number that is equal to the sum of the cubes of its digits.

Example:

isArmstrong(153); // Output: true
isArmstrong(123); // Output: false
*/

const isArmstrong = function (number) {
  // 1^3 + 2^3 + 5^3 = 153
  // convert numnber to array

  const toString = number.toString().split('');
  // [1, 2, 3]
  const newNumber = toString.map(x => x ** 3).reduce((x, y) => x + y);
  console.log(newNumber);

  if (newNumber === number) {
    console.log('Amstrong');
  } else {
    console.log('Not amstrong');
  }
};
isArmstrong(153);

/*

6. Staircase

Problem Statement:
Write a function to print a staircase of n steps using # symbols.

Example:

staircase(5);
Output:
    #
   ##
  ###
 ####
#####
*/
/*
const staircase = function (n) {
  for (let i = 1; i <= n; i++) {
    let stairs = '#'.repeat(i);

    console.log(stairs.padStart(n));
  }
};
staircase(10);

*/

/*

7. Time Conversion

Problem Statement:
Convert 12-hour AM/PM format time to 24-hour format time.

Example:

timeConversion("07:45:54PM"); // Output: "19:45:54"
*/
/*
const timeConversion = function (time) {
  let period = time.slice(-2);
  let [hour, minutes, seconds] = time.slice(0, -2).split(':');

  hour = parseInt(hour);

  if (period === 'AM') {
    if (hour === 12) hour = 0;
  } else {
    if (hour !== 12) hour += 12;
  }
  let hourString = hour.toString().padStart(2, '0');
  return `${hour}:${minutes}:${seconds}`;
};
console.log(timeConversion('10:45:54PM'));

*/

// MAP CREATE A N EW ARRAY BASED ON THE ELEMENTS OF THE ORIGINAL ARRAY

// const numbers = [1, 2, 3, 4];

// const doubled = numbers.reduce((x, y) => x + y);
// console.log(doubled);

// (function () {
//   let header = document.querySelector('h1');
//   header.style.color = 'green';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
