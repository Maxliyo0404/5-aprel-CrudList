
let data = [];

function crudList (){
    list.innerHTML = data.map((item, i) => `
    <li>
      ${item}
       </li>
    `)
}