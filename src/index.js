//import {bro} from './bro';
import {products} from './products';
import "./styles/main.css";

console.log(products)
document.querySelector("button").addEventListener("click",result);
function result() {
    let a= document.getElementById('productName').value;
    document.querySelector('.navBar').append(a);
}

 