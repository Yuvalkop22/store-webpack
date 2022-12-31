let cartTotalPrice = 0;
let selectedProducts = [];

function isProductAlreadyInCart(productName){
    let count = 0;
    selectedProducts.map((product)=>{
        if(product.name === productName){
            count++;
        }
    })
    if (count > 0){
        return true;
    }else{
        return false;
    }
}

function addToCart(product){
    const amount = document.getElementById(product.id).value;
    if (amount <= 0){
      alert("Oops you must enter valid number");
      return;  
    } 
    if(isProductAlreadyInCart(product.name)){
        alert("Oops product already in cart...");
        return;
    }            
    selectedProducts.push({
        "name": product.name,
        "amount": amount,
        "key": product.id,
    })
    createDivCart(product,amount);
}


function createDivCart(product,amount){
    let productCartDiv = document.createElement("div"); //each product in cart
    document.querySelector(".cart").append(productCartDiv);
    productCartDiv.classList.add("productCartDiv");
    
    const selectedProductNameXAmountText = document.createElement("h4");
    
    selectedProductNameXAmountText.innerHTML = product.name + "X" + amount + " = " + product.price * amount + "₪";
    productCartDiv.append(selectedProductNameXAmountText);
    
    
    cartTotalPrice = cartTotalPrice + amount * product.price;
    const prefix = document.getElementById("totalP").innerHTML.split("=")[0] //Total price
    document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
    
    const cartBtnRemove = document.createElement("button");
    cartBtnRemove.innerHTML = "click to remove"
    productCartDiv.append(cartBtnRemove);

    cartBtnRemove.addEventListener('click', ()=>{
        removeProductFromCart(productCartDiv,product,amount)
    });
}

function removeProductFromCart(productCartDiv,product,amount){
    productCartDiv.remove(); //remove the div not the product from the list
    selectedProducts.splice(product.key,1);
    cartTotalPrice = cartTotalPrice -  (amount * product.price);
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
    if (products.length != 0){
        alert("Thanks for your order!")
        window.location.reload();
    }
    else{
        alert("Your cart is empty");
    }
}
function getTotalAmountProductsInOrder(products){
    let totalProductsAmount = 0;
    products.map((product)=>{
        totalProductsAmount += parseInt(product.amount);
    })
    return totalProductsAmount;
}
export {addToCart};
