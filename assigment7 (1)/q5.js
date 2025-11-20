// Q5: Image gallery with modal preview
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

gallery.addEventListener('click', (e)=>{
  const img = e.target.closest('img');
  if(!img) return;
  modalImg.src = img.dataset.large || img.src;
  modal.hidden = false;
});

modal.addEventListener('click', ()=>{
  modal.hidden = true;
});

// prevent clicks inside inner from closing
document.querySelector('.modal-inner').addEventListener('click', (e)=>{
  e.stopPropagation();
});
