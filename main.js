
let data = [];

function crudList (){
    if (event) event.preventDefault();
    list.innerHTML = data.map((item, i) => `
    <li>
      ${item}
      <div>
          <button onclik ="edit(${i})>✏️</button>
          <button onclik ="delete(${i})>🗑</button>
            </div>
       </li>
    `).join("");
}
function add (){
 if(input.value.trim()){
 data.push(input.value.trim());
 input.value = "";
 crudList();
 }
}
function edit(){
    let 
}
