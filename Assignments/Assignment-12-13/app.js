// IF…ELSE & ELSE IF STATEMENT, 
// TESTING SET OF CONDITIONS 

// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

let char = prompt("Enter a character: ");

if (!isNaN(char)) {
    alert("The input is a number.");
} else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    alert("The input is an uppercase letter.");
} else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is not a number or letter.");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var integer1 = prompt('enter integer 1');
var integer2 = prompt('enter integer 2');

if (integer1 > integer2) {
    alert(integer1 + " is larger than " + integer2);
} else if (integer2 > integer1) {
    alert(integer2 + " is larger than " + integer1);
} else if (integer1 === integer2) {
    alert('both are equal');
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

var input = prompt('enter number');

if (input > 0) {
    alert('the number is positive')
}
else if (input < 0) {
    alert('the number is negative')
}
else {}

// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise

var character = prompt('Enter a character:');

if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    alert('true');
} else {
    alert('false');
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise

var passWord = '0211';
var userPass = prompt('enter coreect password');

if (userPass === '') {
    alert('please enter your password')
}
else if (passWord === userPass ) {
    alert('correct!')
}
else {
    alert('incorrect password')
}

// 6. This if/else statement does not work. Try to fix it:

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting)

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

var input = prompt('write time from 24 hrs format');
var time = parseInt(input);

if (time >= 0000 && time < 1200) {
    alert('good morning')
}
else if (time >= 1200 && time < 1700) {
    alert('good afternoon')
}
else if (time >= 1700 && time < 2100) {
    alert('good evening')
}
else if (time >= 2100 && time < 2359) {
    alert('good night')
}
else {
    alert('Invalid time input');

}

