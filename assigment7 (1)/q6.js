// Q6: Real-time table filter
const search = document.getElementById('table-search');
const table = document.getElementById('students-table').tBodies[0];
const noRes = document.getElementById('no-results');

search.addEventListener('input', ()=>{
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  Array.from(table.rows).forEach(row=>{
    const text = (row.cells[0].textContent + ' ' + row.cells[1].textContent).toLowerCase();
    if(text.includes(q)){
      row.style.display = '';
      visible++;
    } else {
      row.style.display = 'none';
    }
  });
  noRes.hidden = visible>0;
});
