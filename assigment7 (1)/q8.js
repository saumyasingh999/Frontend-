// Q8: Custom dropdown using capturing phase for closing
const dd = document.getElementById('custom-dd');
const ddButton = document.getElementById('dd-button');
const ddOptions = document.getElementById('dd-options');

// toggle
ddButton.addEventListener('click', (e)=>{
  const open = ddOptions.hasAttribute('hidden') ? false : true;
  if(open) close();
  else openDropdown();
  e.stopPropagation();
});

ddOptions.addEventListener('click', (e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  ddButton.textContent = li.textContent;
  close();
});

// capturing phase handler to close when clicking outside
document.addEventListener('click', (e)=>{
  // no-op in bubble phase
}, true);

function openDropdown(){
  ddOptions.removeAttribute('hidden');
  ddButton.setAttribute('aria-expanded','true');
}
function close(){
  ddOptions.setAttribute('hidden','');
  ddButton.setAttribute('aria-expanded','false');
}

// close when clicking anywhere (capturing will run before other listeners)
document.addEventListener('click', (e)=>{
  if(!dd.contains(e.target)) close();
});
