import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let names = [];
let name;

do{
    name = await userInput.question('Give a name: ');
    names.push(name);
}while(name != '')
console.log(names);
names.pop();
console.log(names);

process.exit();

// array.push(value) voegt deze value toe aan het einde van je array
// array.pop() verwijdert de laatste value van je array en als console.log(array.pop()) dan wordt de verwijderde waarde weergegeven.