import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = await userInput.question('Wat is je naam? ');
console.log(jeNaam);

let jeLeeftijd = await userInput.question('Hoe oud ben je? ');
console.log('Hallo ' + jeNaam + '. Je bent '+ jeLeeftijd +' jaar oud.');

process.exit();