import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num1 = parseFloat(await userInput.question('Dit is jouw eerste getal: '));
let num2 = parseFloat(await userInput.question('Dit is jouw tweede getal: '));

if(num1 == 0 || num2 == 0){
    console.log("Eén van de getallen is nul.");
    process.exit();
}
if(num1 > 0){
    if(num2 > 0){
        console.log("Beide getallen zijn positief.");
    }else{
        console.log("Het eerste getal is positief en het tweede getal is negatief.");
    }
}else{
    if(num2 > 0){
        console.log("Het eerste getal is negatief en het tweede getal is positief.");
    }else{
        console.log("Beide getallen zijn negatief.");
    }
}

process.exit();
