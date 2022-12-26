import {bro} from './bro';
import "./styles/main.css";

document.querySelector("button").addEventListener("click",result);
function result() {
    let a= document.getElementById('productName').value;
    document.querySelector('.navBar').append(a);
}