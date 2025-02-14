let i = 1;
while(i <= 3){
    let j = 1;
    while(j <= 2){
        console.log(`Buitenste lus: ${i}, Geneste lus: ${j}`);
        j++;
    }
    i++;
}
/* The most important part here is not that we got a while in a while
but the notations of ${i} and ${j} to directly write int/num values into a string
*/
