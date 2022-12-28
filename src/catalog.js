import {products} from './products';
import {createDiv} from './product';
import "./styles/main.css";
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
let selectedProducts = []; //list of selected product to cart
//for loop for each product in products.js 
for (let i = 0; i< products.length; i++){
    createDiv(i);
}
export {selectedProducts}