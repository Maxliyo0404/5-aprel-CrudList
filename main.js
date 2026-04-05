
let data = [];
let input = document.getElementById('input')

function crudList (){
    if (event) event.preventDefault();
    let list = document.getElementById('list');
    list.innerHTML = data.map((item, i) => `
    <li>
      ${item}
      <div>
          <button onclick ="edit(${i})">✏️</button>
          <button onclick ="delete(${i})">🗑</button>
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
 else{
    alert("Please provide an input");
 }
}
function edit(i){
    let newedit = prompt("Edit your item:");
    if(newedit && newedit.trim()) {
    data[i] = newedit.trim();
    crudList();
    }
    else{
    alert("No change made");
 }

}
function del (i){
    if (confirm("Do you want to remove this ?"))
        data.splice(i, 1); {
        crudList();
    } else {
        alert("Cancelled");
    }
}
