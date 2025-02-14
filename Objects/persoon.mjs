let persoon = {
    naam: "Joske",
    leeftijd: 21,
    lievelingsFruit: "Banaan",
    lijst: ['NBA', 'NFL', 'FIFA']
};

console.log(JSON.stringify(persoon));

let boek = {
    titel: 'Mijn Avontuurlijk Boek',
    auteur: {
        voornaam: 'Anne',
        achternaam: 'Smith'
    }
};

boek.isbn = '0-330-25864-8';

// This is how you add a key(-value) to an already existing object

console.log(persoon.lijst[0]);
console.log(boek);
// We reference an object by its name, just like it was a regular variable
/* 
(1) If we want to reference a certain key(-value) which is not a function, we simply put a dot . between the objectname and the keyname:

    objectNaam.keyNaam

(2) Otherwise we can use the bracket notation for the same purpose:
    objectNaam['keyNaam']
*/
