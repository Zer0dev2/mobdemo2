var menu_ul = document.querySelector(".menuul")

var menu = document.querySelector(".menu");
var menu_up = document.querySelector("#menu-up")
var menu_down = document.querySelector("#menu-down")

var i = 0;
function showmenu(){
    if(i==0){
        menu.style.height = "240px";
        menu_down.style.display = "none"
        menu_up.style.display = "block"
        menu_ul.style.display = "block"
        i++
    }
    else{
        menu.style.height = "0px";
        menu_up.style.display = "none"
        menu_down.style.display = "block"
        menu_ul.style.display = "none"
        i=0

    }
    
    
}

