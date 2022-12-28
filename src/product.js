import {products} from './products';
import {selectedProducts} from './catalog';
import {addToCart} from './cart';
function createDiv(i){
    var productDiv = document.createElement("div"); //each product from the list
    document.querySelector(".catalog").append(productDiv);
    productDiv.setAttribute('style','border: 1px solid black;margin:10px;font-family:sans-serif;height: 200px;border-radius: 15px; text-align: center;width: 50%;background-color: lightblue;');
    ///////////////////////////////////////////////////////
    const productNameText = document.createElement("h3");
    productNameText.innerHTML = products[i].name;
    ///////////////////////////////////////////////////////
    const productPriceText = document.createElement("h4");
    productPriceText.setAttribute('style','margin:10px')
    productPriceText.innerHTML = "price: " + products[i].price+'₪';
    ///////////////////////////////////////////////////////
    var productImg = document.createElement("img");
    productImg.src = products[i].imgUrl;
    productImg.alt = products[i].name;
    productImg.setAttribute('style','width: 40px;height: 40px; text-align:center; align-items:center; justify-content: center');
    ///////////////////////////////////////////////////////
    const productInputAmount = document.createElement("input");
    productInputAmount.type = "number";
    productInputAmount.setAttribute('style','width: 80px; margin:4px; text-align:center');
    productInputAmount.placeholder = "Enter Amount";
    productInputAmount.id = i;
    const productBtnAdd = document.createElement("button");
    productBtnAdd.setAttribute('style', 'margin-bottom: 20px')
    productBtnAdd.innerHTML = "Add to cart";
    //add product to cart 
    productBtnAdd.addEventListener("click",()=>{
        addToCart(products[i].name,i)
    });
    productDiv.append(productNameText);
    productDiv.append(productImg);
    productDiv.append(productPriceText);
    productDiv.append(productInputAmount);
    productDiv.append(productBtnAdd);
}
export {createDiv}