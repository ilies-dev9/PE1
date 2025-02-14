import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let temperatuur = parseFloat(await userInput.question('give it '));

if(temperatuur >= 20 && temperatuur <= 23){
    console.log('Aangename kamertemperatuur');
}

/*
&& betekent AND
|| betekent OR
! is de gekende NOT 
*/

process.exit();
