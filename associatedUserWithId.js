// Importing the fetchToDo function from the fetchToDo module
const fetchToDo = require('./fetchToDo');

// Function to get user data based on the first to-do item with id 1
const getData = (data) => {
    // Filtering the data to find the first to-do item with id 1
    const firstToDo = data.filter((informationKey) => informationKey.id === 1);

    // Making a fetch request to get user data based on the found to-do item id
    return fetch(`https://jsonplaceholder.typicode.com/users?id=${firstToDo[0].id}`)
        .then((res) => res.json());
};

// Using the fetchToDo function to get to-do data
fetchToDo().then((data) => {
    // Calling getData with the fetched data
    return getData(data);
}).then((userInformation) => {
    // Logging the user information to the console
    console.log(userInformation);
}).catch((err) => {
    // Handling errors by logging them to the console
    console.error(err);
});
