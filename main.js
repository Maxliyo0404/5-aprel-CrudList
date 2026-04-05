
let data = [];

function crudList (){
    list.innerHTML = data.map((item, i) => `
    <li>
      ${item}
      <div>
          <button onclik ="edit(${i})></button>
          <button onclik ="edit(${i})></button>
            </div>
       </li>
    `)
}