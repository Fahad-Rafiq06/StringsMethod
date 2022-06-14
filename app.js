var firstName = prompt(" Type your First Name ");

var lastName = prompt(" Type your Last Name ");

var fullName = firstName + " " + lastName;

document.write("Hello " + fullName + "<br></br>");

var mobileAsk = prompt("Your Fav Mobile");

document.write("<p> Length of your fav mobile input is " + mobileAsk.length + "</p>");

var country = "Pakistan";
document.write("String" + country + "<br>")
for (var i = 0; i <= country.length; i++) {
    if (country[i] == "n") {
        console.log(country[i])
        document.write("Index of n is " + i);
        break;
    }
}

var greet = "Hello World";
document.write("<br> String" + country + "<br>")

document.write("<p> Last index is " + greet.lastIndexOf("l")+ "</p>")

                // Char at value

document.write(" String" + country + "<br>");

document.write("Character at index 3 is " + country.charAt(3)+ "<br>");

// Changing Name of the cities

// var City = "Hyderabad";

// var city2 = "abad"
// document.write(city.replace("Islam", "Hyder")+ city2)

// String and to & REPLACING
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<p> Your Message: " + message + "</p>")
document.write(message.replace(/and /g, " & "));

// CONVERTING STRING INTO NUMBER

var num1 = "472";

document.write("<p>"+num1 + "</p><p> Type: " + typeof(num1) + "</p>")

var num2 = Number(num1)

document.write("<p>"+num2 + "</p><p> Type: " + typeof(num2) + "</p>");

// Taking Domain From User

// var domain = prompt("Typw URL");
// domain.splice(0, 3);

// Capitalizing The Input

var input = prompt("Prompt to convert string Capital Case");

document.write(input.toUpperCase());

var input2 = prompt("Prompt to convert string Lower Case");

document.write("<br>" + input.toLowerCase());

// Finding X

var a = "3";

var b = "3";

var x = a+b;

alert("If a is " + a + "\r\nand if b is " + b + "\r\nthen a + b is " + x )

// Finding Y

var c = "3";

var d = "3";

var y = c-d;

alert("If c is " + c + "\r\nand If d is " + d + "\r\nthen c - d is " + y );

// Printing Bakery incase sensitive

var ask = prompt("Search Bakery");
ask1 = ask.toLowerCase();
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

for (var i = 0; i <= bakery.length; i++) {
    if (bakery[i] === ask1) {
        document.write(ask1 + " is avaiable at index " + i + " in our bakery");
        break;
    }
    else {
        document.write("We are Sorry " + ask1 + " is not avaiable in our bakery");
        break;
    }
}

// Spliting an Array

var uni = "university Of Karachi";

uni.split();

alert(uni);


// Sorting Vowels and Consonents

document.write("<p> There are 3 Vowels and 5 Conconents in " + country + "</p>")