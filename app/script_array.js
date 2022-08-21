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


//very important to know that array method changes the original array, when string method doesn't.
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


//concatenation
let list1 = ["dove", "finch", "parrot"];
let list2 = ["crow", "Cook", "duck"];

document.getElementById("concatArr").innerHTML = list1.concat(list2);

 
//splice
let pet = ["cat", "birds", "dog"];
pet.splice(1, 0, "fish", "rabbit");
document.getElementById("spliceArr").innerHTML = pet;


//slice
let noFlypet = pet.slice(1);
document.getElementById("sliceArr").innerHTML = "Original arr: " + pet + "<br>" + "new sliced arr: " + noFlypet;

//tostring
document.getElementById("stringArr").innerHTML = pet.toString() + "<br>" + "typeof: " + typeof pet.toString();



//Array sort
//str.sort()
let name = ["John", "Sadman", "tim", "Masum", "Esha"];
document.getElementById("noSortArr").innerHTML = name;
name.sort();
document.getElementById("sortArr").innerHTML = name;
//reverse()
name.reverse();
document.getElementById("reverseArr").innerHTML = name;

//sorting number
let numArr = [100, 20, 1, 40, 80, 300,];
numArr.sort();
document.getElementById("sortNumber").innerHTML = numArr + "<br>" + "Solution: " + numArr.sort(function(a,b){return a - b});

//descending number sort
document.getElementById("descendingNum").innerHTML = "descending sort: " + numArr.sort(function(a,b){return b - a});


//random shuffling
let randomVar = [10, 100 ,1, 400, 70, 25, 56, 134, 1977];
document.getElementById("randomArrSort").innerHTML = randomVar.sort(function(){return 0.5 - Math.random()}) + " refresh to see the sorting";


//lowest array value
randomVar.sort(function(a,b){return a - b});
document.getElementById("lowestValue").innerHTML = "Lowest array value: " + randomVar[0];


//highest array value
randomVar.sort(function(a, b){return b - a});
document.getElementById("highestValue").innerHTML = "Lowest array value: " + randomVar[0];


//Math.max()
function myMaxValue (arr){
    return Math.max.apply(null, arr);
}
document.getElementById("mathHighestValue").innerHTML = myMaxValue(randomVar);

//Math.min()
function myMinValue (arrMin){
    return Math.min.apply(null, arrMin);
}
document.getElementById("mathlowestValue").innerHTML = myMinValue(randomVar);