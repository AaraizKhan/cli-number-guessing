#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will genrate a random number - done
// 2) user input for guessing number
// 3) compare computer and user input

const randomNumber = Math.floor(Math.random() *6 + 1)

const answers = await inquirer.prompt([
    {
    name: "userguessedNumber",
    type: "number",
    message: "please guess a number between 1-6: ",
},
])
if (answers.userguessedNumber === randomNumber){
    console.log("Congratulation you guessed right number")
}
else{
    console.log("you guessed a wrong number")
}
console.log(answers)
