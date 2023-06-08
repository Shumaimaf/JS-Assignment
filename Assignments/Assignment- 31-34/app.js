// DATE METHODS

// 1. Write a program that displays current date and time in 
// your browser.

// var currentDate = new Date();
// document.write(currentDate);

// 2. Write a program that alerts the current month in words. 
// For example December.

// var currentDate = new Date();
// var month = currentDate.toLocaleString('en-US', { month: 'long' });
// document.write('Current Month: ' , month);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

// var currentDate = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayNumber = currentDate.getDay();
// var currentDayName = dayNames[currentDayNumber];
// var firstThreeLetters = currentDayName.slice(0, 3);
// document.write('Today is ',  firstThreeLetters);

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var currentDate = new Date();
// var currentDayNumber = currentDate.getDay();
// if (currentDayNumber === 6 || currentDayNumber === 0) {
//     document.write("It's Fun day");
//   }

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if (currentDay < 16) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var currentDate = new Date();
// document.write(currentDate, '</br>');

// var minutesSince1970 = currentDate.getTime() / 1000 / 60;
// var milliseconds = currentDate.getTime();
// document.write("Elapsed milliseconds since Jan 1,1970 : " , milliseconds , '</br>')
// document.write("Elapsed minutes since Jan 1,1970 : " , minutesSince1970)

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var laterDate = new Date(2020, 11, 31);

// document.write('Later Date : ' , laterDate);

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var startingDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var timeDiff = currentDate.getTime() - startingDate.getTime();
// var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// document.write(daysPassed , " day has passed since 1st ramadan,2015");

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date();
// var beginningOf2015 = new Date(2015, 0, 1, 0, 0, 0); // January 1, 2015, 00:00:00
// var timeDiffInSeconds = Math.floor((referenceDate - beginningOf2015) / 1000);
// document.write('On referance date ' , referenceDate, "," , timeDiffInSeconds, " seconds has passed since beginning of 2015")

/// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser

// var date = new Date();
// document.write("Current date: "+ date + '<br>');
// var date1 = date.setHours(date.getHours()-1);
// var present = new Date(date1);
// document.write("1 hour ago, it was : " + present );


// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var current = new Date();
// document.write("Current date : "+ current + '<br>');
// var date1 = current.setFullYear(current.getFullYear()-100);
// var present = new Date(date1)
// document.write("100 Years Back,it was : " + present);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var userAge = prompt("Enter your age");
// var currentYear = 2023;
// var DOB = currentYear - userAge;
// alert(DOB);

//  14. Write a program to generate your K-Electric bill in your
//  browser. All the amounts should be rounded off to 2
//  decimal places. Display the following fields:
//  a. Customer Name
//  b. Current Month
//  DATE METHODS | JAVASCRIPT
//  Page 5 of 5
//  c. Number of units
//  d. Charges per unit
//  e. Net Amount Payable (within Due Date)
//  f. Late Payment Surcharge
//  g. Gross Amount Payable (after Due Date)

// document.write("<h1>K-Electric Bill</h1>");
// var customerName = prompt("Enter your Name");
// document.write('Customer Name: <b>' + customerName + '</b><br>');
// var customerMonth = prompt("Enter Your recent Bill Month");
// document.write('Month Name: <b>'+ customerMonth + '</b><br>');
// var customerUnit = prompt("Enter your number of units");
// document.write('Number of units: <b>' + customerUnit +'</b><br>');
// var perUnit = prompt("Enter the charges per unit");
// document.write('Charges per unit: <b>' + perUnit + '</b><br>' , '</br>' );
// var netAmount =  customerUnit * perUnit ;
// document.write("Net Amount Payable (within due date) : <b>" + netAmount  + '</b><br>');
// var latePayment = 350;
// document.write('Late payment surcharge : <b>' , latePayment , '</b></br>');
// var grossAmouont = netAmount + latePayment ;
// document.write("Gross payment Payable (after Due Date) : <b>" + grossAmouont + '</b>')

