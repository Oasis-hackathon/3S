const button = document.querySelector(".gnb-menu-btn");
const menu = document.querySelector(".gnb2");

button.addEventListener("click",function(){
    console.log("clicked");
    menu.classList.toggle("show");
})

function fnMove(seq){
    var offset = $("#div" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}


