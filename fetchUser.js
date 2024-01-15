// Function to fetch to-do data from a JSONPlaceholder endpoint
const fetchToDo = () => {
    // Making a fetch request to get user data from the JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // Converting the response to JSON
        return res.json();
      })
      .then((data) => {
        // Logging the fetched data to the console
        console.log(data);
      })
      .catch((error) => {
        // Handling errors by logging them to the console
        console.error(error);
      });
  };
  
  // Calling the fetchToDo function to initiate the data fetching process
  fetchToDo();
  