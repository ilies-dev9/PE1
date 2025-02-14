import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

const fruitBasket = ['peer', 'appel', 'banaan', 'mango', 'meloen'];
let fruit = await userInput.question('Welk type fruit?');

let prijs = 0;
switch(fruit){
    case 'peer':
        prijs = 1.02;
        break;
    case 'appel':
        prijs = .98;
        break;
    case 'banaan':
        prijs = 1.12;
        break;
    case 'mango':
        prijs = 1.52;
        break;
    case 'meloen':
        prijs = 2.28;
        break;
    default:
        console.log('Type fruit niet gekend');
        process.exit();
}
console.log(`De prijs van een ${fruit} is €${prijs}`);

process.exit();


/* 
switch(Variable){
    case 'value':
        commandcode
        break;
    default:
    // fallback code or warning if a case matches
} 
*/
