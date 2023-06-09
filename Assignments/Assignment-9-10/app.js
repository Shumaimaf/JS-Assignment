// USER INPUT & CONDITIONAL 
// STATEMENT

// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights

var cityName = prompt('Enter city name:');
if (cityName === 'Karachi') {
    document.write('Welcome to the city of lights');
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

var gender = prompt('Your Gender:');
if (gender === 'male') {
        document.write('Good Morning Sir');
    }
    else if (gender === 'female') {
        document.write("Good Morning Ma'am");
    }

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

var input = prompt('enter color of road traffic signal:');
if (input === 'red') {
            document.write('Must Stop');
        }
        else if (input === 'yellow') {
            document.write("Ready to Go");
        }
        else if (input === 'green') {
            document.write("Move now");
        }

// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

var input = prompt('input remaining fuel in litres:');
if (input === '0.25') {
            document.write('Please refill the fuel in your car');
        }
        else {
            document.write("Have a safe journey :)");
        }

///   5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = ("4");
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = ("82");
if (b++ === 83){
alert("given condition for variable b is true");
}
var c =("12");
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat") {
alert("car is smaller than cat");
}
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table

var obtainedMarksSubject1 = parseFloat(prompt("Enter the obtained marks for subject1:"));
var obtainedMarksSubject2 = parseFloat(prompt("Enter the obtained marks for subject2:"));
var obtainedMarksSubject3 = parseFloat(prompt("Enter the obtained marks for  subject3:"));

var totalMarks = 100;

document.write('<h1>Mark Sheet</h1>');
document.write('<strong>Total Marks: ' + totalMarks + '</br></strong>');

var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
document.write('<strong>Obtained Marks: ' + totalObtainedMarks + '</br></strong>');

var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write('<strong>Total Percentage: ' + totalPercentage + '%' + '</br></strong>');

if (totalPercentage >= '80') {
    document.write('<strong>Grade: A-One','</br>','Remarks: Excellent</strong>');         
}
else if (totalPercentage >= '70') {
    document.write('<strong>Grade: A','</br>','Remarks: Good</strong>');         
}
else if (totalPercentage >= '60') {
    document.write('<strong>Grade: B','</br>','Remarks: You need to improve</strong>');         
}
else if (totalPercentage < '60') {
    document.write('<strong>Grade: Fail','</br>','Remarks: Sorry</strong>');         
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 5;
var guess = prompt("Enter the secret number between 1 and 10");

if (guess=="5") {
    alert("Bingo! Correct answer")

} 
else if (guess == secretNumber+1) {
  alert('Close enough to the correct answer');
}
else {
  alert('try again');
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

var num = prompt('Enter any number:');
if (num % 3 === 0) {
  document.write(num + " is divisible by 3.");
} else {
  document.write(num + " is not divisible by 3.");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number

var num = prompt('Enter any number:');
if (num % 2 === 0 ) {
  document.write('Even number');
}
else {
  document.write('Odd number');
}

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt('Enter temperature:');
if (temp >= 40) {
  document.write('It is too hot outside.')
}
else if (temp >= 30) {
  document.write('The Weather today is Normal.');
}
else if (temp >= 20) {
  document.write('Today’s Weather is cool.');
}
else if (temp >= 10) {
  document.write('OMG! Today’s weather is so Cool');
}

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result = operation;
if (operation === "+") {
  result = num1 + num2;
} 
else if (operation === "-") {
  result = num1 - num2;
}
else if (operation === "*") {
  result = num1 * num2;
} 
else if (operation === "/") {
  result = num1 / num2;
} 
else if (operation === "%") {
  result = num1 % num2;
} 
else {
  document.write("Invalid operation.");
}
document.write("Result: " + result);