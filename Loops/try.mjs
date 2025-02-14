let getal = 1;
while(getal <= 3){
    for(let i = 1; i <= 3; i++, getal++){
        console.log(getal, getal+i, getal+(2*i), getal+(3*i));
    }
}

/* nu doe bekom volgende output:
1 2 3 4 5 6 7 8 9 10 
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 ...
.
.
.
10 20 ...
*/