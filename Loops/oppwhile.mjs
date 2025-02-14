import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal;

do{
   getal = parseFloat(await userInput.question('Geef een getal tussen 1 en 10 in: '));
}while(getal < 1 || getal > 10);

console.log('Je gekozen getal is '+ getal);
process.exit();

/*
When we need a while-loop so we can prevent a wrong input, but we want to activate this command just once
then we need a do-while, this is basically an upside-down while-loop that does the command and checks its verity

do{
    codeblok;
}while(conditie == true);
*/