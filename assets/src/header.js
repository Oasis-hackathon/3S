const button = document.querySelector(".gnb-menu-btn");
const menu = document.querySelector(".gnb2");

button.addEventListener("click",function(){
    console.log("clicked");
    menu.classList.toggle("show");
})