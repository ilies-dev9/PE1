import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input,output});

let geboorteJaar = parseFloat(await userInput.question('Geef je geboortejaar '));
let toekomstJaar = parseFloat(await userInput.question('Geef een komend jaar '));

console.log(`In ${toekomstJaar} zal ik ${toekomstJaar - geboorteJaar - 1} of ${toekomstJaar - geboorteJaar} jaar zijn.`);
process.exit();