function oppervlakteDriehoek(basis, hoogte){
    let oppervlakte = basis * hoogte / 2;
    console.log('De oppervlakte van een driehoek met een basis van '+ basis +' en een hoogte van '+ hoogte +' is '+ oppervlakte);
}

oppervlakteDriehoek(3, 2);
oppervlakteDriehoek(8, 11);
oppervlakteDriehoek(14, 3);

/* This is how a function is build:
function naam(parameterlijst){
    codeblok;
}

This is how you execute the function:

functionname(given parameter[s]);
    */