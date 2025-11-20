
// Fetch API implementation

// GET request using Fetch API
async function getUsersFetch() {
  try {
    const response = await fetch('http://localhost:3000/users');
    if (!response.ok) {
      throw new Error(HTTP error! status: ${response.status});
    }
    const users = await response.json();
    console.log('Users fetched via Fetch API:', users);
    displayUsers(users);
  } catch (error) {
    console.error('Error fetching users via Fetch:', error);
  }
}

// POST request using Fetch API
async function postUserFetch(userData) {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error(HTTP error! status: ${response.status});
    }
    
    const data = await response.json();
    console.log('User added successfully via Fetch API:', data);
    alert('User registered successfully via Fetch API!');
    document.querySelector('form').reset(); // Reset form after success
    getUsersFetch(); // Refresh the users list
  } catch (error) {
    console.error('Error adding user via Fetch:', error);
    alert('Failed to register user: ' + error.message + '. Make sure JSON Server is running.');
  }
}