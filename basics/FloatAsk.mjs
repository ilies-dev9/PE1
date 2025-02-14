import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// This first part cannot be forgotten or an ERROR will happen, this will be given in the tests/exams

let jeGetal = parseFloat(await userInput.question('Geef getal: '));

// let is a function when you show your JS code that a variable name will be given, no linked value is required but can
// QUESTION in userInput.question is a function and cannot be left out

console.log('Dit is jouw getal ' + (jeGetal * 2));

process.exit();

/*
process.exit() command is needed to end the action
otherwise you will just be able to write anything in the terminal without goal (just like cat command in linux)
*/