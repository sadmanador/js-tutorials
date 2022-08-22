//date type booleans
//booleans are either true or false.



//boolean data
let isRaining = true;
if (isRaining){
    document.getElementById("booleanData").innerHTML = "Take Umbrella with you";
} else {
    document.getElementById("booleanData").innerHTML = "Enjoy the day";
}


//Boolean() function
let is100 = 100;
let is99 = 99;
document.getElementById("booleanFunc").innerHTML = Boolean(is100 > is99);