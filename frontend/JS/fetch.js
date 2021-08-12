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

fetch(`http://localhost:8082/getAll`)
.then((response) => {
    response.json()
    .then((data) => {
        console.log(data);
    });
});