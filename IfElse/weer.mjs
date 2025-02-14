let temperature = 25;
let isRaining = true;

if(temperature > 20){ 
    console.log("Ideaal weer voor een short.");
    if(isRaining){
        console.log("Maar neem toch ook een regenjas mee.");
    }
}else{
    console.log("Beter een lange broek aan doen.");
}

/* See if(isRaining) this function's condition is a variable with datatype boolean
this means it will only go through the if-function when the value is true
P.S. this is old news to you
*/