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
const alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const poem = "Time and tide wait for none"
document.getElementById("demo6").innerHTML = alfa.length + "<br>" + poem.length + "<hr>";


//string escape character
const poem1 = "Hello \"new\" york";
const poem2 = 'It\'s my life';
const poem3 = "true\\false";
document.getElementById("demo7").innerHTML = poem1 + "<br>" + poem2 + "<br>" + poem3;


//string line break
document.getElementById("demo8").innerHTML = "This is a long line \
of of string.";




//string into object
let bmw = "car";
let toyota = new String("car");

document.getElementById("demo9").innerHTML = typeof bmw + "<br>" + typeof toyota;




//string method
//string slice
let fruitBasket = "Apple, Banana, Kiwi";
document.getElementById("demo10").innerHTML = fruitBasket.slice(7, 13);

//string substring
document.getElementById("demo11").innerHTML = fruitBasket.substring(-3, 5);

//substr
document.getElementById("demo12").innerHTML = fruitBasket.substr(15, 18);

//string.replace
let billionaire = "The top BILLIONAIRE is the founder of Microsoft.";
let newBillionaire = billionaire.replace("Microsoft", "Tesla");
document.getElementById("demo13").innerHTML = newBillionaire;

document.getElementById("demo14").innerHTML = billionaire.replace(/billionaire/i, "MILLIONAIRE");

let million = "I told told you million times that earning MILLION dollars its not joke. one need to invest his millions of hours to become a true million dollar guy.";
document.getElementById("demo15").innerHTML = million.replace(/million/g, "thousand");

let excessStr = "                                 Hello World!";
document.getElementById("demo16").innerHTML = excessStr.trim();

document.getElementById("demo17").innerHTML = billionaire.toUpperCase();
document.getElementById("demo18").innerHTML = billionaire.toLowerCase();


document.getElementById("demo21").innerHTML = fruitBasket.charAt(0);
document.getElementById("demo22").innerHTML = fruitBasket.charCodeAt(0);
document.getElementById("demo23").innerHTML = fruitBasket[1];

//converting in array
let singleFruit = fruitBasket.split(",");
document.getElementById("demo24").innerHTML = singleFruit[2];



//String search
document.getElementById("demo25").innerHTML = fruitBasket.indexOf("Banana");


document.getElementById("demo26").innerHTML = million.lastIndexOf("million");

document.getElementById("demo27").innerHTML = million.match(/llion/g);
document.getElementById("demo28").innerHTML = million.match("lion");
document.getElementById("demo29").innerHTML = million.match(/LION/gi);


document.getElementById("demo30").innerHTML = million.includes("million", 30);
document.getElementById("demo31").innerHTML = million.includes("billion", 30);


document.getElementById("demo32").innerHTML = fruitBasket.startsWith("Apple");
document.getElementById("demo33").innerHTML = fruitBasket.endsWith("Apple");

let NAME = "Sadman";
let age = 28;
let mySelf = `Hello, I am ${NAME} and I am ${age} years old`;

document.getElementById("demo34").innerHTML = mySelf;