// ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future

var myArray = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var myArray = {
//     names: []
//   };

// 3. Declare and initialize a strings array

var myArray = ['apple' , 'orange' , 'cherry' , 'mango'];

// 4. Declare and initialize a numbers array.

var myArray = ['1','2','3','4','5'];

// 5. Declare and initialize a boolean array

var booleanArray = [true, false, true, true];

// 6. Declare and initialize a mixed array.

var mixedArray = [1, "apple", true, {name: "shumaima"}, false];

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

document.write('<h1>Qualifications</h1>');

var myArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];

var ul = document.createElement("ul");
ul.style.listStyle = "none";

for (var i = 0; i < myArray.length; i++) {
    var li = document.createElement("li");
    li.textContent = (i + 1) + ") " + myArray[i];
    ul.appendChild(li);
  }

  document.body.appendChild(ul);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

var studentNames = [];
var studentScores = [];
var studentsPercentage = [];

for (let i = 0; i < 3; i++) {
    var names = prompt("Enter student name:");
    var score = parseInt(prompt("Enter student score:"));
    // var percentage = (studentScores[i] / 500) * 100;
    studentNames.push(names);
    studentScores.push(score);
    studentsPercentage.push((studentScores[i] / 500) * 100);

}
document.write('Score of ', studentNames[0], ' is ', studentScores[0], ' Percentage ' , ': '  , studentsPercentage[0] , '%' , '</br>');
document.write('Score of ', studentNames[1], ' is ', studentScores[1], ' Percentage ' , ': '  , studentsPercentage[1] , '%' , '</br>');
document.write('Score of ', studentNames[2], ' is ', studentScores[2], ' Percentage ' , ': '  , studentsPercentage[2] , '%' , '</br>');

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// // // a . 
var colorNames = ['red' , 'blue' , 'green'];
var input = prompt('enter color you want to add to the beginning');
colorNames.unshift(input)
document.write(colorNames);

// // b . 
var colorNames = ['red' , 'blue' , 'green'];
var input = prompt('enter color you want to add to the beginning');
colorNames.push(input)
document.write(colorNames);

// // c . 
// var colorNames = ['red' , 'blue' , 'green'];
var input1 = prompt('enter color1 you want to add to the beginning');
var input2 = prompt('enter color2 you want to add to the beginning');
colorNames.unshift(input1,input2)
document.write(colorNames);

// // d . 
var colorNames = ['red' , 'blue' , 'green'];
var input1 = prompt('enter color1 you want to add to the beginning');
colorNames.shift()
document.write(colorNames);

// // e . 
var colorNames = ['red' , 'blue' , 'green'];
var input1 = prompt('enter color1 you want to add to the beginning');
colorNames.pop()
document.write(colorNames);

// // f . 
var colorNames = ['red' , 'blue' , 'green'];
var inputIndex = parseInt(prompt('at which index do you want to add a color'));
var inputColor = prompt('enter color you want to add');

colorNames.splice(inputIndex,0,inputColor)
document.write(colorNames);

// g , 
var colorNames = ['red' , 'blue' , 'green'];
var inputIndex = parseInt(prompt('at which index do you want to remove a color'));

colorNames.splice(inputIndex,1)
document.write(colorNames);

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

var studentScores = ['23','43','12','89','33'];
document.write('Scores of students : ' , studentScores , '</br>');
studentScores.sort()
document.write('Ordered Scores of students : ' , studentScores );

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

var citiesNames = ['karachi','lahore','peshawar','islamabad','quetta'];
document.write('Cities list :' , '</br>' , citiesNames , '</br>' , '</br>');

citiesNames.splice(0,3)
document.write('Selected cities :' , '</br>' , citiesNames)

// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];

document.write('<strong>Array:</strong>' , '</br>' , arr , '</br>')

var result = arr.join(" ");

document.write('<strong>String:</strong>' , '</br>' ,result);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

// var arr = ['keyboard' , 'mouse' , 'printer' , 'monitor'];
var fifoArray = [];
fifoArray.push('Keyboard');
fifoArray.push('mouse');
fifoArray.push('printer');
fifoArray.push('monitor');

document.write('<strong>Devices:</strong>' , '</br>' , fifoArray , '</br>' , '</br>');

var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();
var fourthValue = fifoArray.shift();

document.write( 'Out:' , '</br>' , firstValue , '</br>');
document.write( 'Out:' , '</br>' , secondValue , '</br>');
document.write( 'Out:' , '</br>' , thirdValue , '</br>');
document.write( 'Out:' , '</br>' , fourthValue , '</br>');

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var fifoArray = [];
fifoArray.push('Keyboard');
fifoArray.push('mouse');
fifoArray.push('printer');
fifoArray.push('monitor');

document.write('<strong>Devices:</strong>' , '</br>' , fifoArray , '</br>' , '</br>');

var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();
var fourthValue = fifoArray.shift();

document.write( 'Out:' , '</br>' , fourthValue , '</br>');
document.write( 'Out:' , '</br>' , thirdValue , '</br>');
document.write( 'Out:' , '</br>' , secondValue , '</br>');
document.write( 'Out:' , '</br>' , firstValue , '</br>');

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:

var phoneManufacturers = ["Apple", "Samsung", "Nokia", "Sony", "Motorola"];

document.write('<select>');
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write('<option value = "  phoneManufacturers[i] ">' + phoneManufacturers[i] + '</option>');
}
document.write('</select>');






