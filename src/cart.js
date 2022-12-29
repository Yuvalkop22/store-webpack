import {selectedProducts} from './product';
import {ProductsList} from './ProductsList';
var cartTotalPrice = 0;
function addToCart(name,index){
    const amount = document.getElementById(index).value; //amount of product 
    let key = selectedProducts.length+1;            
    selectedProducts.push({
        "product": name,
        "productIndexInOriginalList": index,
        "amount": amount,
        "key": key,
    })
    console.log(key);
    createDivCart(index,amount,key)
}
function createDivCart(i,amount1,key){
    //creating cart - html
    var productCart = document.createElement("div"); //each product in cart
    document.querySelector(".cart").append(productCart);
    productCart.setAttribute('style', 'font-family:sans-serif;border: 1px solid black; margin:0; height: 110px; width: 100%; background-color: lightgreen');
    var selectedProductNameXAmountText = document.createElement("h4");
    selectedProductNameXAmountText.id = "nameAmount"
    //for example => breadX1 = 14₪
    selectedProductNameXAmountText.innerHTML = ProductsList[i].name + "X" + amount1 + " = " + ProductsList[i].price * amount1 + "₪";
    productCart.append(selectedProductNameXAmountText)
    ////////////////////////////////////////////////////////////
    cartTotalPrice = cartTotalPrice + amount1 * ProductsList[i].price;
    const prefix = document.getElementById("totalP").innerHTML.split("=")[0] //Total price
    document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
    ////////////////////////////////////////////////////////////
    const cartBtnRemove = document.createElement("button");
    cartBtnRemove.innerHTML = "click to remove"
    productCart.append(cartBtnRemove);
    cartBtnRemove.addEventListener('click', ()=>{
        removeProductFromCart(productCart,amount1,i,key)
    });
}

function removeProductFromCart(productCart,amountRemove,i,key){
    productCart.remove(); //remove the div not the product from the list
    // delete selectedProducts[key];
    selectedProducts.splice(i,1);
    cartTotalPrice = cartTotalPrice -  (amountRemove * ProductsList[i].price);
    const prefix = document.getElementById("totalP").innerHTML.split("=")[0]
    document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
}
function setSelectedAfterRemove(arr){
    
}
const orderBtn = document.getElementById("btnOrder");
orderBtn.addEventListener("click", ()=>{
    orderJson(selectedProducts, cartTotalPrice);
});
function orderJson(products, cartTotalPrice){
    const totalAmountOfProducts = getTotalAmountProductsInOrder(products);
    const order = {
        "products": products,
        "totalPrice": cartTotalPrice, 
        "totalProducts": totalAmountOfProducts,
    }
    console.log(order)
}
function getTotalAmountProductsInOrder(products){
    let totalProductsAmount = 0;
    products.map((product)=>{
        totalProductsAmount += parseInt(product.amount)
    })
    return totalProductsAmount;
}
export {addToCart};
