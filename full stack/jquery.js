// jQuery implementation

// GET request using jQuery
function getUsersJQuery() {
  $.ajax({
    url: 'http://localhost:3000/users',
    method: 'GET',
    dataType: 'json',
    success: function(users) {
      console.log('Users fetched via jQuery:', users);
      displayUsers(users);
    },
    error: function(xhr, status, error) {
      console.error('Error fetching users via jQuery:', error);
    }
  });
}

// POST request using jQuery
function postUserJQuery(userData) {
  $.ajax({
    url: 'http://localhost:3000/users',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(userData),
    success: function(response) {
      console.log('User added successfully via jQuery:', response);
      alert('User registered successfully via jQuery!');
      document.querySelector('form').reset(); // Reset form after success
      getUsersJQuery(); // Refresh the users list
    },
    error: function(xhr, status, error) {
      console.error('Error adding user via jQuery:', error);
      alert('Failed to register user: ' + error + '. Make sure JSON Server is running.');
    }
  });
}