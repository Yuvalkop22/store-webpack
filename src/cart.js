import {products} from './products';
import {selectedProducts} from './catalog';
var cartTotalPrice = 0;
function addToCart(name,index){
    const amount1 = document.getElementById(index).value; //amount of product                             //from each product
    selectedProducts.push({
        "product": name,
        "amount": amount1,
        "key": index
    })
    createDivCart(index,amount1)
}
function createDivCart(i,amount1){
    console.log(i);
    //creating cart - html
    var productCart = document.createElement("div"); //each product in cart
    document.querySelector(".cart").append(productCart);
    productCart.setAttribute('style', 'font-family:sans-serif;border: 1px solid black; margin:0; height: 110px; width: 100%; background-color: lightgreen');
    var selectedProductNameXAmountText = document.createElement("h4");
    selectedProductNameXAmountText.id = "nameAmount"
    //for example => breadX1 = 14₪
    selectedProductNameXAmountText.innerHTML = products[i].name + "X" + amount1 + " = " + products[i].price * amount1 + "₪";
    productCart.append(selectedProductNameXAmountText)
    ////////////////////////////////////////////////////////////
    cartTotalPrice = cartTotalPrice + amount1 * products[i].price;
    const prefix = document.getElementById("totalP").innerHTML.split("=")[0] //Total price
    document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
    ////////////////////////////////////////////////////////////
    const cartBtnRemove = document.createElement("button");
    cartBtnRemove.innerHTML = "click to remove"
    productCart.append(cartBtnRemove);
    cartBtnRemove.addEventListener('click', ()=>{
        removeProductFromCart(productCart,amount1,i)
    });
}

function removeProductFromCart(productCart,amountRemove,i){
    productCart.remove(); //remove the div not the product from the list
    cartTotalPrice = cartTotalPrice -  (amountRemove * products[i].price);
    const prefix = document.getElementById("totalP").innerHTML.split("=")[0]
    document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
}

export {addToCart};
