document.write("<h1>Javascript Assignment 3</h1>");
                    
// QUESTION NO 1
//    TASK 1

var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
 //   METHOD 1
// ADDITION

 // text ko number mein convert krwane ka tareqa no 1: 
// num1 = Number(num1);
// num2 = Number(num2);  

// var sum = num1 + num2;
// alert("Sum: " + sum);

//   METHOD 2
// ADDITION
 // text ko number mein convert krwane ka tareqa no 2:
 var sum = +num1 + +num2;

alert("The sum of " + num1 + " and " + num2 + " is " + sum);

 // QUESTION NO 2
//  TASK 2
// SUBTRACTION
 var difference = +num1 - +num2;

alert("The Result of subtracting " + num1 + " from " + num2 + " is " + difference); 
     
 // TASK 3
// MULTIPLICATION
 var product = +num1 * +num2;

alert("The Result of multiplying" + num1 + " and " + num2 + " is " + product); 

// TASK 4
// DIVISION

// IF AND ELSE WALA METHOD ESE BHI LIKH SKTE HEN
    //  if (num2 !== 0) {
    //     var quotient = +num1 / +num2;
    //     alert("The division of " + num1 + " by " + num2 + " is " + quotient);
    //  } else {
    //      alert("Division by zero is not allowed.");
    //  }
// SECOND METHOD

var quotient = +num1 / +num2;
    
alert("The Result of dividing" + num1 + " by " + num2 + " is " + quotient); 

//  TASK 5
// modulus
var remainder = +num1 % +num2;

alert("The Remainder of dividng" + num1 + " by " + num2 + " is " + remainder); 

 // QUESTION NO 3

document.write("<h2>QUESTION NO 3</h2>");
    
var number;

document.write("Value after variable declaration is: " + number + "<br>");

number = 3;

document.write("Initial value: " + number + "<br>");

number++;

document.write("Value after increment is: " + number + "<br>");

number += 7;

document.write("Value after addition is: " + number + "<br>");

number--;

document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;

document.write("The remainder is: " + remainder + "<br>");

document.write("<hr>");

// QUESTION NO 4

 document.write("<h2>QUESTION NO 4</h2>");
    
var ticketPrice = 600;

var totalCost = ticketPrice * 5;

document.write("<h2>Movie Ticket Cost</h2>");
document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR<br>");
document.write("<hr>");

// QUESTION NO 5

let nums = prompt("enter no to print a table");
document.write("<h2>QUESTION NO 5</h2>");
document.write(`${nums} * 1 = ${nums * 1 }<br>
            ${nums} * 2 = ${nums * 2 }<br>
            ${nums} * 3 = ${nums * 3 }<br>
            ${nums} * 4 = ${nums * 4 }<br>
            ${nums} * 5 = ${nums * 5 }<br>
            ${nums} * 6 = ${nums * 6 }<br>
            ${nums} * 7 = ${nums * 7 }<br>
            ${nums} * 8 = ${nums * 8 }<br>
            ${nums} * 9 = ${nums * 9 }<br>
            ${nums} * 10 = ${nums * 10 } `);
            document.write("<hr>");
// QUESTION NO 6
document.write("<h2>QUESTION NO 6</h2>");
              
var celsiusTemp = 12;

//Convert Celsius to Fahrenheit using the formula F = (C * 9/5) + 32
var fahrenheitFromCelsius = (celsiusTemp * 9/5) + 32;

document.write("<h1>Temperature Converter</h1>");
document.write(celsiusTemp + "°C is " + fahrenheitFromCelsius.toFixed(1) + "°F<br>");

var fahrenheitTemp = 68;

//Convert Fahrenheit to Celsius using the formula C = (F - 32) * 5/9
var celsiusFromFahrenheit = (fahrenheitTemp - 32) * 5/9;

document.write(fahrenheitTemp + "°F is " + celsiusFromFahrenheit.toFixed(1) + "°C<br>");
document.write("<hr>");
      
        // QUESTION NO 7
 var priceItem1 = 560; 
 var quantityItem1 = 2; 

var priceItem2 = 200; 
 var quantityItem2 = 5; 

 var shippingCharges = 150;

//  total cost
 var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
 //  receipt 
 document.write("<h2>QUESTION NO 7</h2>");
 document.write("<h2>SHOPPING CART</h2>");

document.write("<br>Price of item 1 is " + priceItem1 + " PKR");
document.write("<br>Quantity of item 1 is " + quantityItem1 + "");
document.write("<br>Price of item 2 is " + priceItem2 + " PKR");
document.write("<br>Quantity of item 2 is " + quantityItem2 );
document.write("<br><br>Shipping Charges " + shippingCharges + " PKR");
document.write("<br><br>Total cost of your order is " + totalCost + " PKR");
document.write("<hr>");

// QUESTION NO 8

var totalMarks = 1200; 
var marksObtained = 900; 

// calculation of  percentage
var percentage = (marksObtained / totalMarks) * 100;

//result
document.write("<h2>QUESTION NO 8</h2>");
document.write("<h2>Mark Sheet</h2>");

document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");

document.write("<hr>");
// QUESTION NO 9
document.write("<h2>QUESTION NO 9</h2>");
document.write("<h2>Currency in PKR</h2>");
 
 var totalCurrencyPKR = (10 * 104) + (25 * 28);
//result
 document.write("<p>Total currency in PKR: " + totalCurrencyPKR + "</p>");
 document.write("<hr>");
// QUESTION NO 10

 var number = 10;

var result = ((number + 5) * 10) / 2;

 alert(result);
    
// QUESTION NO 11

var currentYear = 2015;

var birthYear = 1992;
   
var age1 = currentYear - birthYear; 
var age2 = age1 - 1;
 
 //results 
 document.write("<h2>QUESTION NO 11</h2>");
 document.write("<h2>The Age Calculator</h2>");

 document.write("<p>Current Year: " + currentYear + "</p>");
 document.write("<p>Birth Year: " + birthYear + "</p>");
 document.write("<b>They are either " + age2 + " or " + age1 + " years old.</b>");
 document.write("<hr>");
// QUESTION NO 12
 var radius = 12;

var pi = 3.142;

var circumference = 2 * pi * radius;

var area = pi * radius * radius;

//results 
document.write("<h2>QUESTION NO 12</h2>");
document.write("<h2>The Geometrizer</h2>")

document.write("<p>Radius of a circle: " + radius + "</p>");
document.write("<p>The circumference is: " + circumference + "</p>");
document.write("<p>The area is: " + area + "</p>");
document.write("<hr>");

// QUESTION NO 13
document.write("<h2>QUESTION NO 13</h2>");
document.write("<h2>Concept of Increment and Decrement</h2>")
        var a = 10;

document.write("<p>The value of a is: " + a + "</p>");
document.write("<h3>Result : </h3>")
 
 // Pre-increment
 document.write("<p>The value of ++a is: " + (++a) + "</p>");
 document.write("<p>Now the value of a is: " + a + "</p>");
 
 // Post-increment
 document.write("<p>The value of a++ is: " + (a++) + "</p>");
 document.write("<p>Now the value of a is: " + a + "</p>");
 
 // Pre-decrement
 document.write("<p>The value of --a is: " + (--a) + "</p>");
 document.write("<p>Now the value of a is: " + a + "</p>");
 
// Post-decrement
document.write("<p>The value of a-- is: " + (a--) + "</p>");
 document.write("<p>Now the value of a is: " + a + "</p>");
 document.write("<hr>");

 // QUESTION NO 14

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

//  results
document.write("<h2>QUESTION NO 14</h2>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");
document.write("<hr>");
        // QUESTION NO 15
        
var snack = "chocolate";

var currentAge = 24;

// assume maximum age
var maxAge = 80;

//per day hm snack ki jo value consume  krenge
var amountPerDay = 2;

// rest of life hm kitna snack consume krenge
var remainingYears = maxAge - currentAge; 
var totalSnacks = remainingYears * 365 * amountPerDay; 

// Output 
document.write("<h2>QUESTION NO 15</h2>");
document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favorite snack: " + snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated maximum Age: " + maxAge + "<br>");
document.write("Amount per day: " + amountPerDay + "<br><br>");
document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".");