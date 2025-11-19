// Q4: Dynamic Form Builder
class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }
  generateForm(containerId){
    const container = document.getElementById(containerId);
    let html = "";
    this.fields.forEach(f=>{
      html += `<label>${f.label}</label><input type="${f.type}" id="${f.label}"><br>`;
    });
    html += `<button onclick="getFormData()">Submit</button>`;
    container.innerHTML = html;
  }
}

function getFormData(){
  const inputs = document.querySelectorAll("input");
  let data = {};
  inputs.forEach(i => data[i.id] = i.value);
  console.log(data);
}
