import {products} from './products';
import "./styles/main.css";
let selectedProducts = [];
let totalPrice = Number.parseInt(document.getElementById("totalP").innerHTML.split("=")[1].split(" ")[1]);
var amount = 0;
for (let i = 0; i< products.length; i++){
    var catalogDiv = document.createElement("div");
    document.querySelector(".catalog").append(catalogDiv);
    catalogDiv.setAttribute('style', 'border: 1px solid black; margin:10px; font-family:sans-serif; height: 200px; text-align: center; width: 50%;background-color: lightblue;');
    var newH1 = document.createElement("h3");
    newH1.innerHTML = products[i].name;
    var newH2 = document.createElement("h4");
    newH2.setAttribute('style','margin:10px')
    newH2.innerHTML = "price: " + products[i].price+'₪';
    var btn = document.createElement("button");
    btn.setAttribute('style', 'margin-bottom: 20px')
    btn.innerHTML = "Add to cart";
    var productImg = document.createElement("img");
    productImg.src = products[i].imgUrl;
    productImg.alt = products[i].name;
    productImg.setAttribute('style','width: 40px; height: 40px; text-align:center; align-items:center; justify-content: center')
    var inputAmount = document.createElement("input");
    inputAmount.type = "number";
    inputAmount.setAttribute('style','width: 80px; margin:4px; text-align:center');
    inputAmount.placeholder = "Enter Amount";
    inputAmount.id = i;
    amount = inputAmount.value;
    catalogDiv.append(newH1);
    catalogDiv.append(productImg);
    catalogDiv.append(newH2);
    catalogDiv.append(inputAmount);
    catalogDiv.append(btn);
    btn.addEventListener("click",function f() {
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
        console.log(newh3.id)
        newh3.innerHTML = products[i].name + "X" + amount1;
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
            console.log("cart number = " + selectedProducts.indexOf("name: milk") + " removed")
            const tag = document.getElementById("nameAmount");
            const tagValue = tag.innerHTML;
            console.log(tagValue)
            totalPrice = totalPrice -  products[i].price;
            let prefix = document.getElementById("totalP").innerHTML.split("=")[0]
            let shave = "= "
            document.getElementById("totalP").innerHTML = prefix + shave + totalPrice+ "₪";
        })
    });
}
const orderBtn = document.getElementById("btnOrder");
orderBtn.addEventListener("click", result);
function result(){
    console.log(selectedProducts);
}
export {selectedProducts};