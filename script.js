let btn=document.querySelector("button");
let imageBox=document.querySelector("#imgBox");
let imgArea=document.querySelector("#img");
let imgText=document.querySelector("input");

btn.addEventListener("click",()=>{
    imgArea.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ imgText.value;

})