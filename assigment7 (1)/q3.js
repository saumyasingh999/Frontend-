// Q3: Multi-step form with validation
const steps = Array.from(document.querySelectorAll('.step'));
let current = 0;
const backBtn = document.getElementById('back-step');
const nextBtn = document.getElementById('next-step');
const finishBtn = document.getElementById('finish');
const summary = document.getElementById('summary');

function showStep(idx){
  steps.forEach((s,i)=> s.hidden = i !== idx);
  current = idx;
  backBtn.style.display = idx===0 ? 'none' : 'inline-block';
  nextBtn.hidden = idx === steps.length-1;
  finishBtn.hidden = idx !== steps.length-1;
}

function validStep(idx){
  const inputs = steps[idx].querySelectorAll('input');
  for(const input of inputs){
    if(!input.checkValidity()) return false;
  }
  return true;
}

nextBtn.addEventListener('click', ()=>{
  if(!validStep(current)) { alert('Please enter valid input on this step.'); return; }
  showStep(current+1);
});

backBtn.addEventListener('click', ()=> showStep(Math.max(0,current-1)));

document.getElementById('multi-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  if(!validStep(current)) { alert('Fix inputs'); return; }
  // gather data
  const name = document.getElementById('step-name').value;
  const email = document.getElementById('step-email').value;
  const pass = document.getElementById('step-pass').value;
  summary.textContent = `Summary:\nName: ${name}\nEmail: ${email}\nPassword: ${'*'.repeat(Math.min(8,pass.length))}`;
  showStep(0);
});

showStep(0);
