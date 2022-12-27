//import {bro} from './bro';
import {products} from './products';
import "./styles/main.css";

console.log(products)
document.querySelector("button").addEventListener("click",result);
function result() {
    let a= document.getElementById('productName').value;
    document.querySelector('.navBar').append(a);
}
for (let i = 0; i< products.length; i++){
    var catalogDiv = document.createElement("div");
    document.querySelector(".catalog").append(catalogDiv);
    catalogDiv.setAttribute('style', 'border: 1px solid black;');
    var newH1 = document.createElement("h3");
    newH1.innerHTML = products[i].name;
    var newH2 = document.createElement("h3");
    newH2.innerHTML = products[i].price;
    var btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    catalogDiv.append(newH1);
    catalogDiv.append(newH2);
    catalogDiv.append(btn);
}
 