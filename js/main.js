const html = document.getElementsByTagName("html")[0];
const up = document.querySelector(".up");
const slider = document.querySelector(".slider");
const img_silder = Array(
    "img/slider.jpg",
    "img/slider2.jpg",
    "img/slider3.jpg", 
    "img/slider4.jpg", 
    "img/slider5.jpg"
    );


up.addEventListener("click", ()=>{
    html.scrollTop = 0;
});


let contador = 0;
setInterval(function(){
    slider.style.backgroundImage = "url("+ img_silder[contador] +")";

    if(contador == 5 ){
        contador = 0;
    }else{
        contador++;
    }
},5000);