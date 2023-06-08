// ARRAYS AND LOOP 

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var multiArray = [[]];

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

  var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];

  // Display matrix in matrix format
  for (var i = 0; i < matrix.length; i++) {
    var row = '';
    for (var j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + ' ';
    }
    console.log(row);
  }

// 3. Write a program to print numeric counting from 1 to 10.

for (i=1; i <= 10; i++) {
    console.log(i)
}

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

var inputNum = prompt('enter table number');
var inputLength = prompt('enter length');

for (i = 1; i <= inputLength; i++) {
    document.write( inputNum ,' x ', i, ' = ', 4 * i + '</br>')
}

// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + '</br>');
}

for (var i = 0; i < fruits.length; i++) {
  document.write('Element at index ' + i + ' is ' + fruits[i] + '</br>');
}

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write('<h1>Counting:</h1>' , Counting ,'</br>');

var ReverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
document.write('<h1>Reverse counting:</h1>' , ReverseCounting ,'</br>');

var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
document.write('<h1>Even:</h1>' , Even ,'</br>');

var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
document.write('<h1>Odd:</h1>' , Odd ,'</br>');

var Series = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
document.write('<h1>Series:</h1>' ,Series ,'</br>');

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var input = prompt('Welcome to ABC bakery,what do you want to order Sir/Madam ?');

if (arr.includes(input)) {
    var index = arr.indexOf(input);
    alert(input + ' is available at index ' + index + ' in our bakery.');
  } else {
    alert('We are Sorry ' + input + ' is not available in our bakery.');
  }

// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].

var arr = [24, 53, 78, 91, 12];
document.write('Array items: ' , arr , '</br>');

var max = Math.max(...arr);
document.write('The largest number is ' , max);

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

var arr = [24, 53, 78, 91, 12];
document.write('Array items: ' , arr , '</br>');

var min = Math.min(...arr);
document.write('The smallest number is ' , min);

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i);
    }
  }
  







