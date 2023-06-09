//.........Question1...........//
//.......i.........//

let main = document.getElementById('main-content');
//.......ii.........//  
let childElements = main.children;
console.log(childElements)
for (let i = 0; i < childElements.length; i++) {
      console.log(childElements[i]);
}
//..............iii.........//
const renderElements = document.getElementsByClassName('render');
for (let i = 0; i < renderElements.length; i++) {
      console.log(renderElements[i].innerHTML);
}
//..............iv........//
const first = document.getElementById('first-name');
first.value = "Shumaima";
//............v........//
const last = document.getElementById('last-name');
last.value = "fatime";
const email = document.getElementById('email');
email.value = "shumaimaf@gmail.com";


//.............Question2............//

//..........i.....//
const formContentElement = document.getElementById('form-content');
console.log(formContentElement.nodeType); // Output: 1

//.........ii........//
const lastNameElement = document.getElementById('lastName');
const lastNameNodeType = lastNameElement.nodeType;
console.log(lastNameNodeType)
const lastNameChildNodeType = lastNameElement.firstChild.nodeType;
console.log(lastNameElement.firstChild)
console.log(lastNameChildNodeType);

//.........iii........//

lastNameElement.firstChild.nodeValue = "hello new value"

//............iv.........//

const mainContentElement = document.getElementById('main-content');
const firstChildElement = mainContentElement.firstElementChild;
console.log(firstChildElement)
const lastChildElement = mainContentElement.lastElementChild;
console.log(lastChildElement);

//........v....//

const lastNameSiblingNext = lastNameElement.nextSibling;
console.log(lastNameSiblingNext);
const lastNameSiblingPrevious = lastNameElement.previousSibling;
console.log(lastNameSiblingPrevious);

//.........vi....//
const emailElement = document.getElementById('email');
const emailParentNode = emailElement.parentNode;
console.log(emailParentNode)
const emailNodeType = emailElement.nodeType;
console.log(emailNodeType)

//........vii..//
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = 'i. Node Type of "form-content": ' + formContentElement.nodeType + '<br><br>';
resultDiv.innerHTML += 'ii. Node Type of "lastName": ' + lastNameNodeType + '<br>';
resultDiv.innerHTML += '   Child Node Type of "lastName": ' + lastNameChildNodeType + '<br><br>';
resultDiv.innerHTML += 'iii. Updated Child Node of "lastName": ' + lastNameElement.firstChild.nodeValue + '<br><br>';
resultDiv.innerHTML += 'iv. First Child of "main-content": ' + firstChildElement.nodeName + '<br>';
resultDiv.innerHTML += '   Last Child of "main-content": ' + lastChildElement.nodeName + '<br><br>';
resultDiv.innerHTML += 'v. Next Sibling of "lastName": ' + lastNameSiblingNext.nodeName + '<br>';
resultDiv.innerHTML += '   Previous Sibling of "lastName": ' + lastNameSiblingPrevious.nodeName + '<br><br>';
resultDiv.innerHTML += 'vi. Parent Node of "email": ' + emailParentNode.nodeName + '<br>';
resultDiv.innerHTML += '    Node Type of "email": ' + emailNodeType;

