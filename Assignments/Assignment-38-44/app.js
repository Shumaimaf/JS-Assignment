// FUNCTIONS, SWITCH 
// STATEMENTS, WHILE… DOWHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

const power = (a, b) => {
    return a ** b;
  }
  
  let a = prompt("Enter a");
  let b = prompt("Enter b");
  
//   document.write(`${a}  raised to the power ${b} is ${power(+a, +b)}`);

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.

const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }
  
  let year = prompt("Enter a year to check if it is leap or not: ");
  
  if (isLeapYear(+year)) {
    document.write(`${year} is a leap year`);
  }
  else {
    document.write(`${year} is not a leap year`);
  }

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

const areaOftriangle = (a, b, c) => {
    return (a + b + c) / 2;
  }
  
  const area = (a, b, c) => {
    const S = areaOftriangle(a, b, c);
    return S * (S - a) * (S - b) * (S - c);
  }
  
  a = prompt("Length of side a");
  b = prompt("Length of side b");
  c = prompt("Length of side c");
  
 document.write(`The area of triangle is ${area(+a, +b, +c)}`);

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

const studentsAverage = (sub1, sub2, sub3) => {
    return (sub1 + sub2 + sub3) / 3;
  }
  
  const studentsPercentage = (totalMarks, maxMarks) => {
    return (totalMarks / maxMarks) * 100;
  }
  
  const mainFunction = (sub1, sub2, sub3) => {
    const averageMarks = studentsAverage(sub1, sub2, sub3);
    const percentage = studentsPercentage(averageMarks, 100);
  
    document.write("Average Marks: " + averageMarks.toFixed(2) + '</br>');
    document.write("Percentage: " + percentage.toFixed(2) + "%");
  }
  
  let sub1 = prompt("Enter the marks for Subject 1");
  let sub2 = prompt("Enter the marks for Subject 2");
  let sub3 = prompt("Enter the marks for Subject 3");
  
  mainFunction(+sub1, +sub2, +sub3);

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

const indexOf = (str, element) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === element) {
        return i;
      }
    }
    return -1;
  }
  
  let str = "Hello to Javascript World";
  document.write(`The first occurence of r in str is at ${indexOf(str, 'i')} <br>`);
  document.write(`The first occurence of z in str is at ${indexOf(str, 'z')}`);

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

const deleteVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  
    const filteredChars = Array.from(str).filter((char) => {
      return !vowels.includes(char);
    });
  
    const result = filteredChars.join("");
    return result;
  }
  
  str = "Hello to JS world";
  let modified = deleteVowels(str);
  document.write("Modified string: " + modified);
  
  
//   7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

function VowelPairs(text) {
    var pairs = [];
    
    for (var i = 0; i < text.length - 1; i++) {
      var pair = text[i] + text[i + 1];
      switch (pair) {
        case "ea":
        case "ae":
        case "ui":
        case "io":
        case "ou":
          pairs.push(pair);
          break;
        default:
          break;
      }
    }
    
    return pairs;
  }
  
  var text = "Pleases read this application and give me gratuity.";
  document.write('<br>' + "Phrase: " + text);
  var pairs = VowelPairs(text);
  document.write('<br>' + "Occurrences of vowel pairs: " + pairs.join(", "));
  
  
  
  
//   8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.
  
  const meters = (km) => {
  return km * 1000;
}

const feet = (km) => {
  return km * 3280.84;
}

const inches = (km) => {
  return km * 39370.1;
}

const cm = (km) => {
  return km * 100000;
}

let km = 10; // Assigning a value of 10 km for testing purposes

document.write(`${km}km in Meters: ${meters(km)}m <br>`);
document.write(`${km}km in Feet: ${feet(km)} <br>`); 
document.write(`${km}km in Inches: ${inches(km)} <br>`);
document.write(`${km}km in Centimeters: ${cm(km)}`);

  
//   9. Write a program to calculate overtime pay of employees. 
//   Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
//   worked above 40 hours. Assume that employees do not work 
//   for fractional part of an hour. 
  
const calculateOvertimePay = (hoursWorked) => {
    const standardHours = 40;
    const overtimeRate = 12.00;
  
    if (hoursWorked <= standardHours) {
      return 0;
    }
  
    let overtimeHours = hoursWorked - standardHours;
    return overtimeHours * overtimeRate;
  }
  
  let hoursWorked = 45; // Assigning a value of 45 hours for testing purposes
  
  let overtimePay = calculateOvertimePay(hoursWorked);
  document.write(`Overtime pay: Rs. ${overtimePay}`);
  
  
//   10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.
  
const calculateCurrencyNotes = (amount) => {
    let hundreds = 0;
    let fifties = 0;
    let tens = 0;
  
    let hundredth = Math.floor(amount / 100);
    let tenth = Math.floor((amount - (hundredth * 100)) / 10);
  
    if (hundredth >= 1) {
      hundreds = hundredth;
    }
  
    if (tenth >= 5) {
      fifties = Math.floor(tenth / 5);
    }
  
    tens = tenth - (fifties * 5);
  
    document.write(`You will have ${hundreds} hundred notes, ${fifties} fifty notes, and ${tens} ten notes`);
  }
  
  calculateCurrencyNotes(500);
  
  
  
