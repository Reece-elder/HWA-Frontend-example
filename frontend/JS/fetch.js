'use strict';

console.log("Hello im connected!");

// Using Fetch to pull the data from our backend
// Fetch is a http response tool, that saves data as a variable you can use

// 1 - Telling fetch what URL to get data from
// 2 - Creating a new function, that takes in response which it gets from fetch
// 3 - Turning the response into a usable data format
// 4 - With the data we get from response.json do the following
// 5 - console.log out the data we got 

// .then - is a command to say 'After this, do this' 

// fetch(url-to-fetch-from)   // 1
// .then((response) => {      // 2
//     response.json()        // 3
//     .then((data) => {      // 4
//         console.log(data); // 5
//     });
// });

// Modify the existing card with the data I've got from fetch
// First I need to find the card I want to modify

// const cardName = document.querySelector('#cardName');
// const cardQuantity = document.querySelector('#cardQuantity');
// const cardPriority = document.querySelector('#cardPriority');
// const cardID = document.querySelector('#cardID');
// console.log(cardName);
// console.log(cardQuantity);
// console.log(cardPriority);
// console.log(cardID);

fetch(`http://localhost:8082/getAll`)
.then((response) => {
    response.json()
    .then((data) => {
        console.log(data);
        console.log(data[0].name);

        // cardName.textContent = "Name :" + data[0].name;
        // cardQuantity.textContent = "Quantity :" + data[0].quantity;
        // cardPriority.textContent = "Priority :" + data[0].high_priority;
        // cardID.textContent = "ID :" + data[0].item_id;

        // For each object in the array
        // Run the createCard method passing in the object
        data.forEach((data)=>{
            createCards(data);
        })

    });
});


// New function to post data to my web page

let createCards = (data) => {

    // First find my parent element
    const cardParent = document.querySelector('#cardList');

    // Create a new card 
    const child = document.createElement('div');
    const childBody = document.createElement('div');
    const childName = document.createElement('h5');
    const childQuantity = document.createElement('h5');
    const childPriority = document.createElement('h5');
    const childID = document.createElement('h5');

    // Modify my elements, passing in the data

    childName.textContent = "Name: " + data.name
    childQuantity.textContent = "Quantity : " + data.quantity;
    childPriority.textContent = "Priority : " + data.high_priority;
    childID.textContent = "ID : " + data.item_id;

    // Modify the classes in my card
    childBody.className = "card-body";
    child.className = "card";

    // Append the elements
    childBody.appendChild(childName);
    childBody.appendChild(childQuantity);
    childBody.appendChild(childPriority);
    childBody.appendChild(childID);

    child.appendChild(childBody);

    cardParent.appendChild(child);

}


//* Posting data to our database using fetch 

// Find our elements that allow us to
// Enter data (Forms)
// Submit data (Button)

const nameInput = document.querySelector('#nameInput');
const quantityInput = document.querySelector('#quantityInput');
const priorityInput = document.querySelector('#highPriorityCheck');
const idInput = document.querySelector('#idInput');

const submitButton = document.querySelector('#submitBtn');
const updateButton = document.querySelector('#updateBtn');
const clearButton = document.querySelector('#clearBtn');

console.log(nameInput);
console.log(quantityInput);
console.log(priorityInput);
console.log(idInput);
console.log(submitButton);
console.log(updateButton);
console.log(clearButton);

// To grab data from an input you have to use .value
// nameInput.value

// Lets create a function that console logs out the values in the form

let printOutForm = () => {

    console.log(nameInput.value);
    console.log(quantityInput.value);
    console.log(priorityInput.value);
    console.log(idInput.value);

}

// Create a function to post our data to the database 

let postData = () => {

    // Creating form data for POST request

    const item = {
        "name": nameInput.value,
        "quantity": parseInt(quantityInput.value, 10),
        "high_priority": true
    };

    console.log(item);

    fetch(`http://localhost:8082/add`, {
        method: `POST`, // Using POST Method
        headers: {
            "Content-type":"application/json" 
        },              // Needed for POST requests
        body: JSON.stringify(item) // What is being posted 
    }).then((response) =>{
        response.json();
    })
    .then((data) => {
        console.log(`Post request succesful`);
    });

};

// Add an event listener to my button, 
// to tell it to do this method when it is clicked

submitButton.addEventListener('click', postData);
