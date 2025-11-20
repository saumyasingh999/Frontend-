xhr.js
// XMLHttpRequest implementation

// GET request using XMLHttpRequest
function getUsersXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/users', true);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      console.log('Users fetched via XMLHttpRequest:', users);
      displayUsers(users);
    } else {
      console.error('Error fetching users:', xhr.statusText);
    }
  };
  
  xhr.onerror = function() {
    console.error('Network error occurred');
  };
  
  xhr.send();
}

// POST request using XMLHttpRequest
function postUserXHR(userData) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/users', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.onload = function() {
    if (xhr.status === 201 || xhr.status === 200) {
      console.log('User added successfully via XMLHttpRequest:', xhr.responseText);
      alert('User registered successfully via XMLHttpRequest!');
      document.querySelector('form').reset(); // Reset form after success
      getUsersXHR(); // Refresh the users list
    } else {
      console.error('Error adding user:', xhr.statusText);
      alert('Failed to register user: ' + xhr.statusText);
    }
  };
  
  xhr.onerror = function() {
    console.error('Network error occurred');
    alert('Network error occurred. Make sure JSON Server is running on port 3000.');
  };
  
  xhr.send(JSON.stringify(userData));
}