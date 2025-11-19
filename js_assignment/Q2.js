// Q2: Student Form Validator
// This file contains validation functions only.

function validateName(name){
  return /^[A-Za-z ]+$/.test(name);
}
function validateEmail(email){
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
}
function validatePhone(phone){
  return /^\d{10}$/.test(phone);
}
function validatePassword(pass){
  return /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass);
}

