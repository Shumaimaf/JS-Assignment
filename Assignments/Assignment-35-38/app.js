// FUNCTIONS 

// 1. Write a function that displays current date & time in your 
// browser.

function displayDateTime() {
    var currentDate = new Date();
    document.write(currentDate);
  }

  displayDateTime();

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

function userName() {
    var firstName = prompt('Enter your fisrt name');
    var lastName = prompt('Enter last name');
    var userName = firstName + ' ' + lastName ;
    document.write('Welcome ' , userName);
}
  userName();

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

function sum() {
    var firstNum = prompt('Enter first num');
    var lastNum = prompt('Enter second num');
    var sum = parseInt(firstNum) + parseInt(lastNum);
        document.write('The sum is : ' , sum);
}
sum();

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

function calculator() {
    var num1 = parseFloat(prompt('Enter the first number'));
    var num2 = parseFloat(prompt('Enter the second number'));
    var operator = prompt('Enter the operator (+, -, *, /)');
    var result;

    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    } else {
      document.write('Invalid operator');
      return;
    }

    document.write('The result is: ' + result);
  }

  calculator();

5. Write a function that squares its argument.

function squares() {
    var input = parseFloat(prompt('Enter the number'));
    var sqr = input * input;

    document.write('The result is: ' + sqr);
    return sqr;
  }

  squares();

// 6. Write a function that computes factorial of a number.

function factorial() {
    var num = parseInt(prompt('Enter a number'));
    function calculateFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }

    var result = calculateFactorial(num);
    document.write('The factorial is: ' + result);
}

factorial();

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

function numb() {
    var startNum = prompt('Enter start number:');
    var endNum = prompt('Enter end num:');
    var counting = '';

    if (startNum <= endNum) {
        for (var i = startNum; i <= endNum; i++) {
            counting += i + ' ';
        }
    } else {
        for (var j = startNum; j >= endNum; j--) {
            counting += j + ' ';
        }
    }
   document.write(counting);
}

numb();

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular

function triangle() {
    var base = prompt('Enter base value');
    var perpendicular = prompt('Enter perpendicular value');

    function square(number) {
        return Math.pow(number, 2);
    }

    var hypotenuseSquared = square(base) + square(perpendicular);
    var hypotenuse = Math.sqrt(hypotenuseSquared);

    console.log('Hypotenuse:', hypotenuse);
}
 triangle();

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function areaOfRectangle() {
    var width = prompt('Enter width');
    var height = prompt('Enter height');
    var area = width * height;
    console.log(area);

}

areaOfRectangle();

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

function palindrome(check) {
    var user = check.split("").reverse().join("")

    if (user === check) {
        alert("This is a Palindrome Sequence")
    } else {
        alert("This is not a Palindrome Sequence")
    }
}
var input = prompt("Enter any pharse to check the palindrome sequence");
var result = palindrome(input);
// 
//  11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalWords(str) {
    var letter = str.split(' ');
    for (i = 0; i < letter.length; i++) {
        var word = letter[i];
        letter[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return letter.join(' ');
}
var str = 'the quick brown fox';
var capitalizedStr = capitalWords(str);
document.write(str + '<br>' + '<b>Capitalized String:</b>' + capitalizedStr);

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestWord(word) {
    var words = word.split(" ");
    var longest = "";
    for (i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest;
}
var word = "Web Development Tutorial";
document.write(word , '</br>');
var longest = longestWord(word);
document.write('<b>Longest word is: </b>' + longest);

function countOccurrences(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}

var occurrences = countOccurrences('JSResourceS.com', 'o');
document.write("JSResourceS.com" , " , " , "o" , " , " , occurrences); 

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius){
    var circumference = 2*3.142*radius;
    return circumference   
}
function calcArea(){
    var area = 3.142*radius*radius;
    return area
}
var radius = 4;
var circumferenceOfcircle = calcCircumference(radius);
var areaOfcircle = calcArea(radius);
document.write("Circumference of circle is: "+ circumferenceOfcircle + '<br>'+ "Area of circle is: "+areaOfcircle)
