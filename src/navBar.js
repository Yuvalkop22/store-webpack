import {products} from './products';
///////////////////////////////////////////////////////////
//navbar search 
const searchDiv = document.getElementById("navBar");
const btn = document.getElementById("btnSearch");
btn.addEventListener("click",changeName);
function changeName(){
    const str = document.getElementById("productName").value;
    const productName = document.createElement("h3");
    searchDiv.appendChild(productName);
    products
    .filter((product)=>(product.category === str))
    .map((product)=>(productName.innerHTML = productName.innerHTML + product.name + ","));
}
///////////////////////////////////////////////////////////