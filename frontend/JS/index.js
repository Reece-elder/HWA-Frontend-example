'use strict';

// ! Function


console.log("Hello from the console!");

// ? Variable types in JavaScript

let text;            // - It can change its value and its data type
const number = 123;  // - It is constant, it cannot change its value or data type
var egg;             // - Is bad, do not use is accessible everywhere

// Java =/= JavaScript 

// JavaScript is a high level language (uses words a lot) for a variety of situations
// Mainly in front end as it is functional and easy to write

// Functional = Runs from files, doesnt require objects, constructors or main methods

// Creating a variable for a String (your name)

// public static String name = "Reece";
let trainerName = "Reece";
let favNumber = 36;
let favFruits = ["banana", "apple", "rambutan"];

// alert(trainerName);
console.log(trainerName);


//* DOM Manipulation
//* DOM - Document Object Model = Webpage

// Using Document Query Selectors to find elements on the page
// I want to change the text value of my h2 at the top of the page
// I first need to 'find' this element

// Create a variable called header
// This variable = document.queryselector (method which looks in the DOM)
// const header = document.querySelector('h2');
// console.log(header);

// Accessing the element
// Accessing the textContent attribute and changing it to a new value
// header.textContent = "This is some new text.. wild."

// const newHeader = document.querySelector('#thisismyhaderandtheidisreallylong');
// console.log(newHeader);

// newHeader.textContent = "I hope I got this right lol";


// Using JS I want to create a new header that sits underneath my <h2>
// First I need to find the parent element
// I need to create a new element
// And I need to append new element to the parent element

// Parent element
const header = document.querySelector('h2');
const header = document.querySelector('.nameInput');
const header = document.querySelector('#createForm');

// new element 
const newHeader = document.createElement('h3');
newHeader.textContent = "This is a new header";

// Append element to parent
header.appendChild(newHeader);

