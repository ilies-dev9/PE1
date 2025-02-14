import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dag = await userInput.question('Geef een dag in de week: ');
let weekdagen = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag'], weekenddagen = ['zaterdag', 'zondag'];

switch(weekdagen.includes(dag)){
    case true:
        console.log('Dit is een weekdag.');
        break;
    case false:
        if(weekenddagen.includes(dag)){
            console.log('Dit is een weekenddag.');
        }
        else{console.log('Dit is geen dag in de week.');

        }
}

process.exit();
