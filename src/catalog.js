import {products} from './products';
import "./styles/main.css";
let selectedProducts = [];
let totalPrice = Number.parseInt(document.getElementById("totalP").innerHTML.split("=")[1].split(" ")[1]);
for (let i = 0; i< products.length; i++){
    var catalogDiv = document.createElement("div");
    document.querySelector(".catalog").append(catalogDiv);
    catalogDiv.setAttribute('style', 'border: 1px solid black; margin:10px; font-family:sans-serif; height: 200px; text-align: center; width: 50%;background-color: lightblue;');
    var newH1 = document.createElement("h3");
    newH1.innerHTML = products[i].name;
    var newH2 = document.createElement("h3");
    newH2.innerHTML = "price: " + products[i].price;
    var btn = document.createElement("button");
    btn.setAttribute('style', 'margin-bottom: 20px')
    btn.innerHTML = "Add to cart";
    var productImg = document.createElement("img");
    productImg.src = products[i].imgUrl;
    productImg.alt = products[i].name;
    productImg.setAttribute('style','width: 40px; height: 40px; text-align:center; align-items:center; justify-content: center')
    catalogDiv.append(newH1);
    catalogDiv.append(productImg);
    catalogDiv.append(newH2);
    catalogDiv.append(btn);

    btn.addEventListener("click",function f() {
        console.log(products[i])
        selectedProducts.push(products[i]);
        var productCart = document.createElement("div");
        document.querySelector(".cart").append(productCart);
        productCart.setAttribute('style', 'border: 1px solid black; height: 100px; width: 100%; background-color: lightblue');
        var newh3 = document.createElement("h4");
        newh3.innerHTML = products[i].name + " , " + products[i].price;
        productCart.append(newh3)
        totalPrice = totalPrice + products[i].price;
        console.log(totalPrice)
        let prefix = document.getElementById("totalP").innerHTML.split("=")[0]
        let shave = "= "
        document.getElementById("totalP").innerHTML = prefix + shave + totalPrice;
        var btn = document.createElement("button");
        btn.innerHTML = "click to remove"
        productCart.append(btn);
        btn.addEventListener('click',function f(){
            productCart.remove();
            totalPrice = totalPrice - products[i].price;
            console.log(totalPrice)
            let prefix = document.getElementById("totalP").innerHTML.split("=")[0]
            let shave = "= "
            document.getElementById("totalP").innerHTML = prefix + shave + totalPrice;
        })
    });
}
export {selectedProducts};