import {products} from './products';
import "./styles/main.css";
let selectedProducts = []; //list of selected product to cart
let totalPrice = //0
    Number.parseInt(document.getElementById("totalP").innerHTML //Total price = 0₪
        .split("=")[1] // 0₪
        .split(" ")[1] // 0
    );
var amount = 0;
let nameAmount = "";

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
    productBtnAdd.addEventListener("click",function f() {
        const amount1 = document.getElementById(i).value;
        selectedProducts.push({
            "product": products[i].name,
            "amount": amount1,
            "key": selectedProducts.length
        });
        var productCart = document.createElement("div");
        document.querySelector(".cart").append(productCart);
        productCart.setAttribute('style', 'font-family:sans-serif;border: 1px solid black; margin:0; height: 110px; width: 100%; background-color: lightgreen');
        var newh3 = document.createElement("h4");
        newh3.id = "nameAmount"
        newh3.innerHTML = products[i].name + "X" + amount1 + " = " + products[i].price * amount1 + "₪";
        nameAmount = newh3.innerHTML;
        productCart.append(newh3)
        totalPrice = totalPrice + amount1 * products[i].price;
        let prefix = document.getElementById("totalP").innerHTML.split("=")[0]
        let shave = "= "
        document.getElementById("totalP").innerHTML = prefix + shave + totalPrice+"₪";
        var btn = document.createElement("button");
        btn.innerHTML = "click to remove"
        productCart.append(btn);
        btn.addEventListener('click',function f(){
            productCart.remove();
            const amountRemove = parseInt(nameAmount.split("X")[1]);
            totalPrice = totalPrice -  (amountRemove * products[i].price);
            let prefix = document.getElementById("totalP").innerHTML.split("=")[0]
            let shave = "= "
            document.getElementById("totalP").innerHTML = prefix + shave + totalPrice+ "₪";
        })
    });
}

//order button - in cart
const orderBtn = document.getElementById("btnOrder");
orderBtn.addEventListener("click", result);
function result(){
    console.log(selectedProducts);
}