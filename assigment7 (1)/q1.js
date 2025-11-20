// Q1: Dynamic Product List Manager (event delegation)
const productInput = document.getElementById('product-input');
const addBtn = document.getElementById('add-product');
const productList = document.getElementById('product-list');

function createProductItem(name){
  const li = document.createElement('li');
  li.className = 'product-item';
  li.innerHTML = `<span class="name">\${name}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  return li;
}

addBtn.addEventListener('click', ()=> {
  const val = productInput.value.trim();
  if(!val) return;
  productList.appendChild(createProductItem(val));
  productInput.value = '';
  productInput.focus();
});

// event delegation on ul
productList.addEventListener('click', (e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  if(e.target.classList.contains('delete')){
    li.remove();
  } else if(e.target.classList.contains('edit')){
    enableInlineEdit(li);
  }
});

function enableInlineEdit(li){
  const nameSpan = li.querySelector('.name');
  const old = nameSpan.textContent;
  const input = document.createElement('input');
  input.value = old;
  nameSpan.replaceWith(input);
  input.focus();

  function save(){
    const text = input.value.trim() || old;
    const span = document.createElement('span');
    span.className = 'name';
    span.textContent = text;
    input.replaceWith(span);
    document.removeEventListener('click', outside);
  }
  function outside(ev){
    if(!li.contains(ev.target)) save();
  }
  // click outside to auto-save
  document.addEventListener('click', outside);
  input.addEventListener('keydown', (ev)=>{
    if(ev.key === 'Enter') save();
    if(ev.key === 'Escape'){
      const span = document.createElement('span');
      span.className = 'name';
      span.textContent = old;
      input.replaceWith(span);
      document.removeEventListener('click', outside);
    }
  });
}
