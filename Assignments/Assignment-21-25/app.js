// STRING METHODS

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name

var firstName = prompt('Enter First Name :');
var secondName = prompt('Enter Last Name ');

var fullName = firstName + ' ' + secondName ;

document.write('Welcome ' + fullName);

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

var input = prompt('Enter your favorite mobile phone model:');
document.write('My Favorite Phone is: ' + input + '</br>');

var length = input.length;
document.write("Length of your string: " + length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = "Pakistani";
document.write('String: ' + word + '</br>');

var index = word.indexOf("n");
document.write("Index of 'n': " + index);

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser

var word = "Hello World";
document.write('String: ' + word + '</br>');

var index = word.lastIndexOf("l");
document.write("Index of 'l': " + index);

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";
document.write('String: ' + word + '</br>');

var index = word.charAt(3);
document.write("Character at '3': " + index);

// 6. Repeat Q1 using string concat() method.

var firstName = prompt('Enter First Name :');
var secondName = prompt('Enter Last Name ');

var fullName = firstName.concat( ' ' , secondName)

document.write('Welcome ' + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

var city = 'Hyder';
var city1 = 'abad';
document.write('City: ' , city , city1 , '</br>');

var replace = 'Islam'
var newName = replace.concat(city1)
document.write('After replacement: ' , newName);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

var message = 'Ali and Sami are best friends. They play cricket and football together.' ;
var index = message.replace(/and/g, "&");
document.write(index);

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

var str = "472";
var num = Number(str);
document.write('Value: ' , num , '</br>')
var type = typeof(str);
document.write('Type: ' , type , '</br>')
var num1 = String(str);
document.write('Value: ' , num1 , '</br>')
var type2 = typeof(num);
document.write('Type: ' , type2)

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

var input = prompt('input :');
var display = input.toUpperCase();
document.write('User Input: ' , input , '</br>' , 'UPPER CASE: ' , display);

// 11. Write a program that takes user input. Convert and 
// show the input in title case.

var input = prompt('input :');
var firstLetter = input.charAt(0).toUpperCase();
var restOfWord = input.slice(1).toLowerCase();
var display = firstLetter + restOfWord;

document.write('User Input: ' , input , '</br>' , 'Title case: ' , display);

// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
document.write('Number: ' , num , '<br>');

var numString = String(num);
var numWithoutDot = numString.replace('.', '');
document.write('Result: ' , numWithoutDot);

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .

var username = prompt('Enter your username:');
var specialSymbolsRegex = /[@.,!]/;

if (specialSymbolsRegex.test(username)) {
  document.write('Please enter a valid username without special symbols.');
} else {
  document.write('Username:', username);
}

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter a password:");
document.write('Entered password ', password)

if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 6 && !/^[0-9]/.test(password)) {
  alert("Valid password!");
} else {
  alert("Invalid password! Please make sure the password contains alphabets and numbers, and is exactly 6 characters long.");
}

// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = 'University of Karachi';

var university = university.split("");
for (var i = 0; i < university.length; i++) {
  console.log(university[i]);
}

// 17. Write a program to display the last character of a user 
// input.

var input = prompt('input:')
document.write(input , '<br>');

var lastCharacter = input[input.length - 1];
document.write('last character of input is : ', lastCharacter);

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
document.write('Text : ' , sentence, '<br>')
var words = sentence.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "the") {
        count++;
    }
}

document.write('There are ', count, " of word 'the'");

