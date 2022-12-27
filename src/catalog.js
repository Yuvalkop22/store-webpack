import {products} from './products';
import "./styles/main.css";
let selectedProducts = [];
for (let i = 0; i< products.length; i++){
    var catalogDiv = document.createElement("div");
    document.querySelector(".catalog").append(catalogDiv);
    catalogDiv.setAttribute('style', 'border: 1px solid black; height: 120px; width: 20%');
    var newH1 = document.createElement("h3");
    newH1.innerHTML = products[i].name;
    var newH2 = document.createElement("h3");
    newH2.innerHTML = "price: " + products[i].price;
    var btn = document.createElement("button");
    btn.setAttribute('style', 'margin-bottom: 20px')
    btn.innerHTML = "Add to cart";
    catalogDiv.append(newH1);
    catalogDiv.append(newH2);
    catalogDiv.append(btn);
    btn.addEventListener("click",function f() {
        console.log(products[i])
        selectedProducts.push(products[i]);
        var productCart = document.createElement("div");
        document.querySelector(".cart").append(productCart);
        productCart.setAttribute('style', 'border: 1px solid black; height: 100px; width: 100%');
        var newh3 = document.createElement("h4");
        newh3.innerHTML = products[i].name + " , " + products[i].price;
        productCart.append(newh3)
        var btn = document.createElement("button");
        btn.innerHTML = "click to remove"
        productCart.append(btn);
        btn.addEventListener('click',function f(){
            productCart.remove();
        })
    });
}
export {selectedProducts};