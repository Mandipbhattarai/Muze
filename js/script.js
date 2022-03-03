// typing animation script 
var typed = new Typed(".animate", {
    strings: ["Adobe XD","Sketch","Figma"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// button customization
var clicked = false;
function toggle(){
    if (!clicked){
        clicked=true; 
        document.getElementById("con1").innerHTML="$10";
        document.getElementById("con2").innerHTML="$49";
    }
    else
    {
        clicked=false;
        document.getElementById("con1").innerHTML="$0";
        document.getElementById("con2").innerHTML="$24";
    }
}
