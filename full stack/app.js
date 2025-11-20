// Main application logic

// Form submission handler
function handleFormSubmit(event, method = 'xhr') {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const country = document.getElementById('country').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const terms = document.getElementById('terms').checked;
  
  // Validation
  if (!name || !email || !phone || !gender || !country || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;

 }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
  if (!terms) {
    alert('Please accept the terms and conditions');
    return;
  }
  
  // Create user object
  const userData = {
    name,
    email,
    phone,
    gender,
    country,
    password,
    createdAt: new Date().toISOString()
  };
  
  // Submit based on selected method
  switch(method) {
    case 'xhr':
      postUserXHR(userData);
      break;
    case 'jquery':
      postUserJQuery(userData);
      break;
    case 'axios':
      postUserAxios(userData);
      break;
    case 'fetch':
      postUserFetch(userData);
      break;
    default:
      console.error('Invalid method');
  }
  
 // Form will be reset after successful submission in each method
}

// Display users in console and on page
function displayUsers(users) {
  const usersContainer = document.getElementById('usersDisplay');
  if (!usersContainer) return;
  
  if (users.length === 0) {
    usersContainer.innerHTML = '<p class="text-muted">No users registered yet.</p>';
    return;
  }
  
  let html = '<div class="list-group">';
  users.forEach(user => {
    html += `
      <div class="list-group-item">
        <h5 class="mb-1">${user.name}</h5>
        <p class="mb-1"><strong>Email:</strong> ${user.email}</p>
        <p class="mb-1"><strong>Phone:</strong> ${user.phone}</p>
        <p class="mb-1"><strong>Gender:</strong> ${user.gender}</p>
        <p class="mb-1"><strong>Country:</strong> ${user.country}</p>
        <small class="text-muted">Registered: ${new Date(user.createdAt).toLocaleString()}</small>
      </div>
    `;
  });
  html += '</div>';
  
  usersContainer.innerHTML = html;
}

// Load users when page loads
window.addEventListener('DOMContentLoaded', function() {
  // Default to XHR for initial load
  getUsersXHR();
});