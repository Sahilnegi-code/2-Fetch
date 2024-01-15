// Importing the fetch function from the fetch module
const fetch = require('node-fetch');

// Function to fetch user data from a JSONPlaceholder endpoint using Promises
const fetchUsers = () => {
    // Returning a new Promise that resolves or rejects based on the fetch result
    return new Promise((resolve, reject) => {
        // Making a fetch request to get data from the JSONPlaceholder endpoint
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                // Converting the response to JSON
                return res.json();
            })
            .then((data) => {
                // Resolving the Promise with the fetched data
                resolve(data);
            })
            .catch((err) => {
                // Rejecting the Promise with the error if any
                reject(err);
            });
    });
};

// Using the fetchUsers function to fetch data and handling the result or errors
fetchUsers().then((data) => {
    // Logging the fetched data to the console
    console.log(data);
}).catch((err) => {
    // Handling errors by logging them to the console
    console.log(err);
});

// Exporting the fetchUsers function for use in other modules
module.exports = fetchUsers;
