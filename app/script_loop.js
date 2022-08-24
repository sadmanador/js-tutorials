//for loop
let text = "";
for (let i = 0; i <= 5; i++) {
  text += i + "<br>";
}
document.getElementById("simpleForLoop").innerHTML = text;



//assigning multiple variables in for loop
let cars = ["BMW","Toyota", "Audi", "RR", "Tesla"];
let i, len, render;
for (i = 0, len = cars.length, render = ""; i < len; i++){
    render += cars[i] + " is a car brand." + "<br>";
}
document.getElementById("arrForLoop").innerHTML = render;



//for/in looping
const player = {name: "Jacob", age:"25", sport:"Hocky"};
let txtPlayer = "";
for (let x in player) {
  txtPlayer += player[x] + "<br>";
}
document.getElementById("forInLoop").innerHTML = txtPlayer;


//for/in looping array
const teamScore = [20, 39, 1424, 458, 54, 9];
let txtScore = "";
for (let x in teamScore) {
  txtScore += teamScore[x] + " ";
}
document.getElementById("forInArr").innerHTML = txtScore;




//arr.forEach() is method calls for each array items.
let txtForEach = "";
teamScore.forEach(myTeamScore);

function myTeamScore(value, index, array) {
  txtForEach += value + "<br>";
}
document.getElementById("forEachLoop").innerHTML = txtForEach;




//for/of looping.
let carsUSA = ["Tesla", "BMW", "Ford"];

let txtCarUS = "";
for (let x of carsUSA) {
  txtCarUS += x + " ";
}
document.getElementById("forOfLoop").innerHTML = txtCarUS;


//for/of looping through string.
let worthLess = "floccinaucinihilipilification";

let txtWorthLess = "";
for (let x of worthLess) {
  txtWorthLess += x + "_";
}
document.getElementById("forOfStr").innerHTML = txtWorthLess;



//while loop
let txtWhile = "";
let q = 0;
while (q < 5) {
  txtWhile += q + "<br>";
  q++;
}
document.getElementById("whileLoop").innerHTML = txtWhile;



//do/while
let txtDo = "";
let p = 0;

do {txtDo += p + " ";
  p++;
}
while (p < 5);
document.getElementById("doLoop").innerHTML = txtDo;