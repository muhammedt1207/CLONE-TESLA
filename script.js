var bgcolor = document.getElementById("button");
var fontcol = document.getElementById("button");
function bgwhite() {
    bgcolor.style.backgroundColor = "white";
    fontcol.style.color = "black";
}
const openMenu = () => {
    document.querySelector(".backdrop").className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector(".backdrop").className = 'backdrop ';
    document.querySelector('aside').className = '';
}
document.getElementById("menubutton").onclick = e => {
    e.preventDefault();
    openMenu();
}
document.querySelector('aside button.close').onclick = e => {
    closeMenu();

}

function changecolor() {
    var colorr = document.getElementById("color1");
    scrollvalue = Window.scrollY;

    if (scrollvalue < 150) {
        colorr.style.color = "#fff";
    }
    else {
        colorr.style.color = "#000";
    }


    var colorr = document.getElementById("color2");
    scrollvalue = Window.scrollY;

    if (scrollvalue < 150) {
        colorr.style.color = "#fff";
    }
    else {
        colorr.style.color = "#000";

    }
    var colorr = document.getElementById("color3");
    scrollvalue = Window.scrollY;

    if (scrollvalue < 150) {
        colorr.style.color = "#fff";
    }
    else {
        colorr.style.color = "#000";
    }

    var colorr = document.getElementById("color4");
    scrollvalue = Window.scrollY;

    if (scrollvalue < 150) {
        colorr.style.color = "#fff";
    }
    else {
        colorr.style.color = "#000";
    }

    var colorr = document.getElementById("color5");
    scrollvalue = Window.scrollY;

    if (scrollvalue < 150) {
        colorr.style.color = "#fff";
    }
    else {
        colorr.style.color = "#000";
    }

    var colorr = document.getElementById("color6");
    scrollvalue = Window.scrollY;

    if (scrollvalue < 150) {
        colorr.style.color = "#fff";
    }
    else {
        colorr.style.color = "#000";
    }
    var colorr=document.getElementById("color7");
    scrollvalue=Window.scrollY;

if(scrollvalue<150)
{
colorr.style.color="#fff";
}
else{
 colorr.style.color="#000";
}  
var colorr=document.getElementById("color8");
    scrollvalue=Window.scrollY;

if(scrollvalue<150)
{
colorr.style.color="#fff";
}
else{
 colorr.style.color="#000";
}  
var colorr=document.getElementById("color9");
    scrollvalue=Window.scrollY;

if(scrollvalue<150)
{
colorr.style.color="#fff";
}
else{
 colorr.style.color="#000";
}  
var colorr=document.getElementById("menubutton");
    scrollvalue=Window.scrollY;

if(scrollvalue<150)
{
colorr.style.color="#fff";
}
else{
 colorr.style.color="#000";
}  

}


window.addEventListener('scroll', changecolor);
