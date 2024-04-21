let button = document.querySelector('.burger_btn');
let burger_box =document.querySelector(".burger_box");
burger_box.style.display="none" 
let isOpen=false;

button.addEventListener("click", () => { 


    if(isOpen===false){
    burger_box.style.display="block";
    isOpen=true
    }
    else{
        burger_box.style.display="none";
        isOpen=false;
        }

})