import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let taal = await userInput.question('Welke taal spreekt u? ');

if(taal == 'NL'){
console.log('Welkom op onze applicatie');
}else if(taal == 'FR'){
console.log('Bienvenue sur notre application');
}else if(taal == 'EN'){
console.log('Welcome on our app');
}else{console.log('ERROR 404: language not found');}

// if/else-function and '==' this ain't nothing new

process.exit();
