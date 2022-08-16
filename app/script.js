const hello = "Hello, this is our first string of JS";
document.getElementById("demo1").innerHTML = hello;


const num = 1200;
const num1 = 11200;
const num2 = 100;
const num3 = 200;
document.getElementById("demo2").innerHTML = num;

const addingUP = hello + num;
document.getElementById("demo3").innerHTML = addingUP;


const calcu = num1 - num;
document.getElementById("demo4").innerHTML = calcu;



let stat1 = "My salary is around";
let salary = (num + num1) * num2;
let stat2 = "however I'm still not satisfied";
document.getElementById("demo5").innerHTML = stat1 + " " + salary + ". " + stat2;


//datatype
let number = 100;
let str = "Hello World";
let car;
cat = "mewza";
let boolean = true;
const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
let fruit = ["apple","orange","banana"];

document.getElementById("datatype").innerHTML =
typeof number + "<br>" +
typeof str + "<br>" + 
typeof car + "<br>" +
typeof cat + "<br>" +
typeof noValue + "<br>" +
typeof boolean + "<br>" +
typeof person + "<br>" +
typeof fruit + "<br>" + "<hr>";



//string
