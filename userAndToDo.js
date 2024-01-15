// Function to fetch user details and to-do data from JSONPlaceholder endpoints
const userAndToDo = () => {
    // Making a fetch request to get user data from the JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // Converting the response to JSON
        return res.json();
      })
      .then((userData) => {
        // Logging the user data to the console
        console.log("User Data:", userData);
  
        // Making a fetch request to get to-do data from the JSONPlaceholder API
        return fetch("https://jsonplaceholder.typicode.com/todos");
      })
      .then((res) => {
        // Converting the response to JSON
        return res.json();
      })
      .then((todoData) => {
        // Logging the to-do data to the console
        console.log("To-Do Data:", todoData);
      })
      .catch((err) => {
        // Handling errors by logging them to the console
        console.error(err);
      });
  };
  
  // Calling the userAndToDo function to initiate the data fetching process
  userAndToDo();
  