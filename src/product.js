import {addToCart} from './cart';
import {getRelevantProducts} from './catalog'

function createDiv(product){
    let productDiv = document.createElement("div"); //each product from the list
    document.querySelector(".catalog").append(productDiv);
    productDiv.classList.add("productDiv");

    const productNameText = document.createElement("h3");
    productNameText.innerHTML = product.name;
    

    const productPriceText = document.createElement("h4");
    productPriceText.setAttribute('style','margin:10px')
    productPriceText.innerHTML = "price: " + product.price+'₪';
    

    const productImg = document.createElement("img");
    productImg.src = product.imgUrl;
    productImg.alt = product.name;
    productImg.classList.add("productImg");
    

    const productInputAmount = document.createElement("input");
    productInputAmount.type = "number";
    productInputAmount.classList.add("productInputAmount");
    productInputAmount.placeholder = "Enter Amount";
    productInputAmount.id = product.id;

    const productBtnAdd = document.createElement("button");
    productBtnAdd.setAttribute('style', 'margin-bottom: 20px');
    productBtnAdd.innerHTML = "Add to cart";

    productBtnAdd.addEventListener("click",()=>{
        addToCart(product);
    });

    productDiv.append(productNameText);
    productDiv.append(productImg);
    productDiv.append(productPriceText);
    productDiv.append(productInputAmount);
    productDiv.append(productBtnAdd);
}
export {createDiv};