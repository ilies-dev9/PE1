import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let gem = 0

for(let a = 0; a < 4; a++){
    let g2 = parseFloat(await userInput.question('Geef hier een getal: '));
    gem += (g2/4);}

console.log(gem);


process.exit();

/* for-function like you know it, just a different way of writing it:
for(ex1 ; loop-condition; ex2){
    commands
}

with ex1: command that is executed once BEFORE the start of the loop (often defining a local variable)
ex2: command that is executed AFTER each loop
*/