// Function to fetch all user details from a JSONPlaceholder endpoint
const fetchUserAllDetails = () => {
    // Making a fetch request to get user data from the JSONPlaceholder API
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // Checking if the request was successful
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Converting the response to JSON
        return res.json();
      })
      .then((data) => {
        // Returning the array of user details
        return data;
      })
      .catch((error) => {
        // Handling errors by logging them to the console
        console.error(error);
      });
  };
  
  // Calling the fetchUserAllDetails function to initiate the data fetching process
  fetchUserAllDetails()
    .then((data) => {
      // Handling the fetched data outside of the function
      data.forEach((user) => {
        console.log(user);
      });
    });
  