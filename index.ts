#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt(
    [
        {
            name: "sentence",
            message: "Enter your sentence",
            type: "input"
        }
    ]
)

let word = answer.sentence.trim().split(" ");
console.log(`your word count is ${word.length}`);

