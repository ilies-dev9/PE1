import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let tvSerie = await userInput.question('Noem een tv-serie: ');
let plaats;

switch(tvSerie){
    case 'The Simpsons':
        plaats = 'Springfield';
        break;
    case 'Spider-man':
        plaats = 'New York City';
        break;
    case 'One Piece':
        plaats = 'Towards Laughtale!!!';
        break;
    case 'Naruto':
    case 'Naruto Shippuuden':
        plaats = 'Konoha';
        break;
    case 'Solo Leveling':
        plaats = 'Zuid-Korea';
        break;
        // Yep ik heb deze schande verbeterd XDD Ik moest wat respect tonen voor dit meesterwerk
    case 'Kaiju 8': 
    case 'Jujutsu Kaisen':
        plaats = 'Japan';
        break;
    case 'Family Guy':
        plaats = 'Kinda everywhere';
        break;
    case 'Ninjago':
        plaats = 'Ninjago';
        break;
    default:
        console.log(`Sorry, ik weet niet waar ${tvSerie} zich afspeelt.`);
        process.exit();
}

// this is a great code if multiple values in the case function have a same command to be done
// I have tried to do this with || but it doesn't work

console.log(`${tvSerie} vindt zich plaats in ${plaats}`);

process.exit();
