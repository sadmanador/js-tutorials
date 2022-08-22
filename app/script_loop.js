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



//