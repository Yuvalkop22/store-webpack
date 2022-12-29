import {selectedProducts} from './product';
import {ProductsList} from './ProductsList';
var cartTotalPrice = 0;

var imgBtn = document.getElementById("cartButton");
imgBtn.addEventListener("click", ()=>{    
    var cart = document.querySelector(".cart");
    var originalText = document.getElementById("totalP").value
    if (selectedProducts.length == 0){
        document.getElementById("totalP").innerHTML = "No Products Selected Yet"
    }else{
        document.getElementById("totalP").innerHTML = originalText
    }
})

function addToCart(i,name,index){
    const amount = document.getElementById(i).value; //amount of product 
    let key = selectedProducts.length;            
    selectedProducts.push({
        "product": name,
        "productIndexInOriginalList": index,
        "amount": amount,
        "key": key,
    })
    createDivCart(i,amount,key,index)
}
function createDivCart(i,amount1,key,originalIndex){
    var productCart = document.createElement("div"); //each product in cart
    document.querySelector(".cart").append(productCart);
    productCart.setAttribute('style', 'font-family:sans-serif;border: 1px solid black; margin:0; height: 110px; width: 100%; background-color: lightgreen');
    var selectedProductNameXAmountText = document.createElement("h4");
    selectedProductNameXAmountText.id = "nameAmount"
    //for example => breadX1 = 14₪
    selectedProductNameXAmountText.innerHTML = ProductsList[originalIndex].name + "X" + amount1 + " = " + ProductsList[originalIndex].price * amount1 + "₪";
    productCart.append(selectedProductNameXAmountText)
    ////////////////////////////////////////////////////////////
    cartTotalPrice = cartTotalPrice + amount1 * ProductsList[originalIndex].price;
    const prefix = document.getElementById("totalP").innerHTML.split("=")[0] //Total price
    document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
    ////////////////////////////////////////////////////////////
    const cartBtnRemove = document.createElement("button");
    cartBtnRemove.innerHTML = "click to remove"
    productCart.append(cartBtnRemove);
    cartBtnRemove.addEventListener('click', ()=>{
        removeProductFromCart(productCart,amount1,i,key,originalIndex)
    });
}
function getElementIndexByKey(key){
    selectedProducts.map((item,index)=>{
        if (item.key === key){
            return (index);
        }
    })
}
function removeProductFromCart(productCart,amountRemove,i,key,originalIndex){
    productCart.remove(); //remove the div not the product from the list
    console.log("price = " + ProductsList[originalIndex].price);
    const index = getElementIndexByKey(key);
    selectedProducts.splice(index,1);
    cartTotalPrice = cartTotalPrice -  (amountRemove * ProductsList[originalIndex].price);
    const prefix = document.getElementById("totalP").innerHTML.split("=")[0]
    document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
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
