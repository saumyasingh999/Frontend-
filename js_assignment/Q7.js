// Q7: Login Form Validation
function validateUsername(u){ return /^.{5,}$/.test(u); }
function validatePassword(p){
  return /[0-9]/.test(p) && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[^A-Za-z0-9]/.test(p) && p.length>=8;
}
