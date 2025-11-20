// Q9: Form submit blocker with live errors
const form = document.getElementById('block-form');
const nameI = document.getElementById('f-name');
const emailI = document.getElementById('f-email');
const passI = document.getElementById('f-pass');
const errName = document.getElementById('err-name');
const errEmail = document.getElementById('err-email');
const errPass = document.getElementById('err-pass');
const msg = document.getElementById('form-msg');

function validate(){
  let ok = true;
  if(!nameI.value.trim()){ errName.textContent = 'Name required'; ok=false; } else errName.textContent='';
  if(!emailI.value.includes('@')){ errEmail.textContent = 'Valid email required'; ok=false; } else errEmail.textContent='';
  if(passI.value.length < 6){ errPass.textContent = 'Password min 6 chars'; ok=false; } else errPass.textContent='';
  return ok;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(validate()){
    msg.hidden = false;
    setTimeout(()=> msg.hidden = true, 4000);
    form.reset();
  }
});

// live corrections remove errors
[nameI,emailI,passI].forEach(el=>{
  el.addEventListener('input', validate);
});
