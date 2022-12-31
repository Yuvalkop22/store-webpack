import {ProductsList} from './ProductsList';
import {createDiv} from './product';
import "./styles/main.css";

let relevantProducts = [];

const searchDiv = document.getElementById("navBar");

const categorySelect = document.getElementById("categories");
categorySelect.addEventListener("change",()=>getRelevantProducts(ProductsList));

function getRelevantProducts(products){
    relevantProducts.splice(0,relevantProducts.length);
    const category = document.getElementById("categories").value;
    if (category === "All"){
        products.map((item)=>relevantProducts.push(item));
    }
    products.map((item)=>{
        if (item.category === category){
            relevantProducts.push(item);
        }
    })
    
    document.querySelector(".catalog").replaceChildren();
    for (let i = 0; i< relevantProducts.length; i++){
        createDiv(relevantProducts[i]);
    }
}

export {getRelevantProducts}