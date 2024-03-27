#! /usr/bin/env node
import inquirer from "inquirer";
// 1- Computer will generate a random number.
// 2- User input for guessing number.
// 3- Compare user input with computer generated number.
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing game");
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
;
