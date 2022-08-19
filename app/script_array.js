//declaring an array
var car = ["toyota", "Mazda", "BMW", "RR", "Lambo"];

//typeof array returns object.

//accessing array
console.log(car[0]);
console.log(car[3]);
console.log(car[2]);



//changing arr element
car[3] = "MG";
console.log(car);



//length
//any length is always a number
console.log(car.length);
console.log(car.length -2);



//push or adding new elements
car.push("Audi");
document.getElementById("pushArr").innerHTML = car;

//Recognizing array
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("recogArr").innerHTML = Array.isArray(fruits);



//Array Method
//toString()
document.getElementById("conStr").innerHTML = fruits.toString();

//join(symbol or space)
document.getElementById("joinArr").innerHTML = fruits.join("/");


//pop or removing elements.
document.getElementById("popArr").innerHTML = fruits.pop();
document.getElementById("popArrF").innerHTML = fruits;

//shift() opposite of pop()
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let noBanana = fruits2.shift();
document.getElementById("shiftArr").innerHTML = fruits2;
document.getElementById("whatShifted").innerHTML = noBanana;