// i. Get element of id “main-content” and assign them in a variable.

var mainContent = document.getElementById("main-content");

// ii. Display all child elements of “main-content” element.

var mainContent = document.getElementById("main-content");
var childElements = mainContent.childNodes;

for (var i = 0; i < childElements.length; i++) {
  var childElement = childElements[i];

  // Check if the child is an element node (Node.ELEMENT_NODE)
  if (childElement.nodeType === Node.ELEMENT_NODE) {
    console.log(childElement);
  }
}

// iii. Get all elements of class “render” and show their innerHTML 
// in browser

var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
  var element = renderElements[i];
  console.log(element.innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.

document.getElementById("first-name").value = "John";

// v. Repeat part iv for id ”last-name” and “email”

document.getElementById("last-name").value = "Doe";
document.getElementById("email").value = "johndoe@example.com";


// QUESTION 2 

// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.

var formContent = document.getElementById("form-content");
var nodeType = formContent.nodeType;
console.log("Node type of element with id 'form-content': " + nodeType);

// ii. Show node type of element having id “lastName” and its child node.

var lastName = document.getElementById("lastName");
var lastNameNodeType = lastName.nodeType;
var childNode = lastName.childNodes[0];
var childNodeType = childNode.nodeType;

console.log("Node type of element with id 'lastName': " + lastNameNodeType);
console.log("Node type of its child node: " + childNodeType);

// iii. Update child node of element having id “lastName”.

var lastName = document.getElementById("lastName");
var childNode = lastName.childNodes[0];
childNode.nodeValue = "Smith";

// iv. Get First and last child of id “main-content”.

var mainContent = document.getElementById("main-content");
var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;

console.log("First child of 'main-content': ", firstChild);
console.log("Last child of 'main-content': ", lastChild);

// v. Get next and previous siblings of id “lastName”. 

var lastName = document.getElementById("lastName");
var nextSibling = lastName.nextSibling;
var previousSibling = lastName.previousSibling;

console.log("Next sibling of 'lastName': ", nextSibling);
console.log("Previous sibling of 'lastName': ", previousSibling);

// vi. Get parent node and node type of element having id “email”

var email = document.getElementById("email");
var parentNode = email.parentNode;
var nodeType = email.nodeType;

console.log("Parent node of 'email': ", parentNode);
console.log("Node type of 'email': ", nodeType);
