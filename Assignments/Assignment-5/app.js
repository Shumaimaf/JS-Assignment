// MATH EXPRESSIONS 

// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser. 

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var sum = num1 + num2;
document.write("the sum of " + num1 + " and " + num2 + " is " + sum);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus. 

var num1 = parseFloat(prompt("Enter the first number for subtraction:"));
var num2 = parseFloat(prompt("Enter the second number for subtraction:"));
var subtract = num1 - num2;
document.write("the subtraction of " + num1 + " and " + num2 + " is " + subtract , '</br>');

var num1 = parseFloat(prompt("Enter the first number for multiplication:"));
var num2 = parseFloat(prompt("Enter the second number for multiplication:"));
var multiply = num1 * num2;
document.write("the multiplication of " + num1 + " and " + num2 + " is " + multiply, '</br>');

var num1 = parseFloat(prompt("Enter the first number for division:"));
var num2 = parseFloat(prompt("Enter the second number for division:"));
var divide = num1 / num2;
document.write("the division of " + num1 + " and " + num2 + " is " + divide, '</br>');
 
var num1 = parseFloat(prompt("Enter the first number for modulus:"));
var num2 = parseFloat(prompt("Enter the second number for modulus:"));
var modulus = num1 % num2;
document.write("the modulus of " + num1 + " and " + num2 + " is " + modulus);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// // h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

var valueOfvar = 'Value after variable declaration is: ';
var intializeNum = 2;
var message1 = 'Intial Value: ' + intializeNum ;
var incrementNum =  intializeNum + 1;
var valueAdded = incrementNum + 7;
var decrementNum = valueAdded - 1;
var remain = decrementNum % 3;

document.write(valueOfvar , intializeNum , '</br>');
document.write(message1, '</br>');
document.write('Value after increment is: ', incrementNum, '</br>');
document.write('Value after addition is: ' , valueAdded, '</br>');
document.write('Value after decrement is: ', decrementNum, '</br>');
document.write('The remainder is: ' , remain);

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:

var ticketCost = 600;
var buyingCost = ticketCost*5;
document.write('Total cost to buy 5 tickets to a movie is ' + buyingCost + 'PKR');

// 5. Write a script to display multiplication table of any 
// number in your browser. E.g

document.write('Table of 4', '</br>');
for (i=1; i<=10; i++) {
document.write( '4 x ' , i , '=' , 4*i + '</br>')
}

// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


var celsius = 25; 
var fahrenheit = (celsius * 9 / 5) + 32; 
document.write(celsius + "°C is " + fahrenheit + "°F" + '</br>'); 
var fahrenheit2 = 70; 
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write('<h1>Shopping Cart</h1>');
var price1 = 650;
document.write('Price of an item 1 is ' + price1 + '</br>');
var quantity1 = 3 ;
document.write('Quantity of item 1 is ' + quantity1 + '</br>');
var price2 = 100;
document.write('Price of an item 2 is ' + price2 + '</br>');
var quantity2 = 7 ;
document.write('Quantity of item 2 is ' + quantity2 + '</br>');
var shipping = 100;
document.write('Shipping Charges ' + shipping + '</br>','</br>');
var totalCost = (price1*quantity1)+(price2*quantity2)+shipping;
document.write('Total Cost of your Order is ', totalCost);

// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

document.write('<h1>Mark Sheet</h1>');
var totalmarks = 980;
document.write('Total marks: ' + totalmarks + '</br>');
var obtainedmarks = 804;
document.write('Obtained marks: ' + obtainedmarks + '</br>');
var percentage = (obtainedmarks/totalmarks)*100;
document.write('Percentage: ' + percentage , '%' );

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write('<h1>Current in PKR</h1>' + '</br>');
var totalcurreny= 1048+700;
document.write('Total Currency in PKR: ' + totalcurreny);

// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write('<h1>Airthmetic of the sequence</h1>' + '</br>');
var sequence = 20+5*10/2;
document.write(sequence);

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old

document.write('<h1>Your Age</h1>');
var currentYear = 2023;
var birthYear = 2010;
var age = currentYear-birthYear;
document.write('Current Year: ' , currentYear , '</br>' ,'Birth Year: ' , birthYear , '</br>' , 'Your Age is: ' , age );

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write('<h1>The Geometrizer</h1>');
var radius = 20;
var circumference = 2*3.142*radius;
var area = 3.142*radius**2;
document.write('Radius of a circle is ' + radius + '</br>' + 'The circumference is ' + circumference + '</br>' + ' The area is ' + area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”

document.write('<h1>The Lifetime Supply Calculator</h1>');
var snack = 'chips';
var age = 15;
var maxAge = 65;
var perDay = 3;
var total = (maxAge-age)*perDay;
document.write('Favourite snack: ', snack , '</br>','Current Age: ' , age , '</br>' , 'Estimated maximum age: ', maxAge,'</br>','You will need ', total,' chips to last you until the ripe old age of 65');


