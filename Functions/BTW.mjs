function addVat(price, vat = 21){
    return(price * (1 + vat/100));
}

console.log(addVat(102, 21));   // Beide van deze aanroepen zullen hetzelfde resultaat hebben
console.log(addVat(102));       //