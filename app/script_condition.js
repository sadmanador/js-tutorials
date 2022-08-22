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



//if statement
let scoreMark = 82;
if (scoreMark >= 60 && scoreMark < 80){
    document.getElementById("ifStatement").innerHTML = "You passed, But have to work more";
} else if (scoreMark >= 80 && scoreMark <= 100){
    document.getElementById("ifStatement").innerHTML = "Well Done!";
} else {
    document.getElementById("ifStatement").innerHTML = "You failed";
}


//switch