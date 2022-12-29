import {ProductsList} from './ProductsList';
import {createDiv} from './product';
import "./styles/main.css";
///////////////////////////////////////////////////////////
//navbar search 
let relevantProducts = [];
const searchDiv = document.getElementById("navBar");
const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click",()=>getRelevantProducts(ProductsList));
console.log(relevantProducts);
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
        createDiv(i,relevantProducts);
    }
}
export {getRelevantProducts}