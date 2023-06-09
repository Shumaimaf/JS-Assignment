// MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var input = prompt('input integar');
document.write('number: ', input , '<br>');
var roundOff = Math.round(input);
document.write('round off value: ', roundOff , '<br>');
var floor = Math.floor(input);
document.write('floor value: ', floor , '<br>');
var ceil = Math.ceil(input);
document.write('ceil value: ', ceil , '<br>');

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var input = prompt('input negative number');
document.write('number: ', input , '<br>');
var roundOff = Math.round(input);
document.write('round off value: ', roundOff , '<br>');
var floor = Math.floor(input);
document.write('floor value: ', floor , '<br>');
var ceil = Math.ceil(input);
document.write('ceil value: ', ceil , '<br>');

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var input = prompt('input integar');
var abs = Math.abs(input);
document.write('The absolute value : ', input , ' is ', abs);

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

var dice = Math.floor(Math.random()* 6) + 1;
document.write('random dice value : ' , dice);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coin = Math.floor(Math.random() * 2) + 1;
if (coin === 1) {
    document.write(coin,'</br>','random coin value: Tails')
}
else {
    document.write(coin,'</br>','random coin value: Heads')
}

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

var value =Math.floor(Math.random() * 100) + 1;     
document.write('random number between 1 and 100 : ' , value )

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var input = prompt('Enter your weight in kilograms');
var weight = parseFloat(input);

if (!isNaN(weight)) {
    document.write("Your weight is: " + weight + " kgs");
} else {
    document.write("Invalid input. Please enter a valid weight.");
}

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user

var secretNumber = 5;
var guess = prompt("Enter the secret number between 1 and 10");

if (guess == "5") {
    alert("Congratulation! You guessed the secret number.")

} else if (guess < "5") {
    alert("your guess is too low. Try again!")

} else if (guess > "5") {
    alert("Your guess is too high. Try again!")
}


