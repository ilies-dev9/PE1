function berekenOppervlakteRechthoek(zijde1, zijde2){
    let oppervlakte = zijde1 * zijde2;
    return oppervlakte;
}

let resultaat = berekenOppervlakteRechthoek(4, 7);
/* 
Als we willen dat het resultaat van onze functie onthouden wordt voor de rest van onze code (return)
    Dan moeten we het wegschrijven via een variable of direct implementeren; Vb:
console.log(berekenOppervlakteRechthoek(4, 7));
*/