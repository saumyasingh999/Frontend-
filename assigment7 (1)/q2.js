// Q2: Live character counter with warning
const textarea = document.getElementById('char-text');
const counter = document.getElementById('char-count');
const resetBtn = document.getElementById('reset-char');
const MAX = 100;

function updateCounter(){
  const left = MAX - textarea.value.length;
  counter.textContent = left;
  if(left <= 0){
    counter.style.background = 'red';
  } else if(left <= 20){
    counter.style.background = 'yellow';
  } else {
    counter.style.background = 'transparent';
  }
}
textarea.addEventListener('input', (e)=>{
  // prevent typing beyond max using JS (also maxlength attr present)
  if(textarea.value.length > MAX){
    textarea.value = textarea.value.slice(0, MAX);
  }
  updateCounter();
});

textarea.addEventListener('keydown', (e)=>{
  if(textarea.value.length >= MAX && !['Backspace','ArrowLeft','ArrowRight','Delete'].includes(e.key)){
    e.preventDefault();
  }
});

resetBtn.addEventListener('click', ()=>{
  textarea.value = '';
  updateCounter();
});

// init
updateCounter();
