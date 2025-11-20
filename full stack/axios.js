
// Axios implementation

// GET request using Axios
async function getUsersAxios() {
  try {
    const response = await axios.get('http://localhost:3000/users');
    console.log('Users fetched via Axios:', response.data);
    displayUsers(response.data);
  } catch (error) {
    console.error('Error fetching users via Axios:', error);
  }
}

// POST request using Axios
async function postUserAxios(userData) {
  try {
    const response = await axios.post('http://localhost:3000/users', userData);
    console.log('User added successfully via Axios:', response.data);
    alert('User registered successfully via Axios!');
    document.querySelector('form').reset(); // Reset form after success
    getUsersAxios(); // Refresh the users list
  } catch (error) {
    console.error('Error adding user via Axios:', error);
    alert('Failed to register user: ' + (error.message || 'Unknown error') + '. Make sure JSON Server is running.');
  }
}