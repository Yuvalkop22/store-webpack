import {products} from './products';
import "./styles/main.css";
///////////////////////////////////////////////////////////
//navbar search 
const searchDiv = document.getElementById("navBar");
const btn = document.getElementById("btnSearch");
btn.addEventListener("click",changeName);
function changeName(){
    const str = document.getElementById("productName").value;
    const productName = document.createElement("h3");
    searchDiv.appendChild(productName);
    products
    .filter((product)=>(product.category === str))
    .map((product)=>(productName.innerHTML = productName.innerHTML + product.name + ","));
}
///////////////////////////////////////////////////////////
let selectedProducts = []; //list of selected product to cart
let cartTotalPrice = //0
    Number.parseInt(document.getElementById("totalP").innerHTML //Total price = 0₪
        .split("=")[1] // 0₪
        .split(" ")[1] // 0
    );
var amount = 0;
//for loop for each product in products.js 
for (let i = 0; i< products.length; i++){
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
    const productBtnAdd = document.createElement("button");
    productBtnAdd.setAttribute('style', 'margin-bottom: 20px')
    productBtnAdd.innerHTML = "Add to cart";
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
    amount = productInputAmount.value;
    productDiv.append(productNameText);
    productDiv.append(productImg);
    productDiv.append(productPriceText);
    productDiv.append(productInputAmount);
    productDiv.append(productBtnAdd);
    ////////////////////////////////////////////////////////
    //add product to cart 
    productBtnAdd.addEventListener("click",addToCart);
    function addToCart(){
        const amount1 = document.getElementById(i).value; //amount of product                             //from each product
        selectedProducts.push({
            "product": products[i].name,
            "amount": amount1,
            "key": selectedProducts.length
        });
        ////////////////////////////////////////////////////////////
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
        cartBtnRemove.addEventListener('click',removeProductFromCart);
        function removeProductFromCart(){
            productCart.remove(); //remove the div not the product from the list
            const amountRemove = parseInt(selectedProductNameXAmountText.innerHTML.split("X")[1]);
            cartTotalPrice = cartTotalPrice -  (amountRemove * products[i].price);
            const prefix = document.getElementById("totalP").innerHTML.split("=")[0]
            document.getElementById("totalP").innerHTML = prefix + "= " + cartTotalPrice+ "₪";
        }
    };
}

//order button - in cart
const orderBtn = document.getElementById("btnOrder");
orderBtn.addEventListener("click", result);
function result(){
    console.log(selectedProducts);
}