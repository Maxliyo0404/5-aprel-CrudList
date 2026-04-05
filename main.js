
let data = [];

function crudList (){
    if (event) event.preventDefault;
    list.innerHTML = data.map((item, i) => `
    <li>
      ${item}
      <div>
          <button onclik ="edit(${i})>✏️</button>
          <button onclik ="edit(${i})>🗑</button>
            </div>
       </li>
    `).join("");
}
function add (){

}