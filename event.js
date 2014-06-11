window.onscroll = getpageScroll;
window.onresize = getLargeur;
var HauteurBaniere = 360;
var screenGlue = false;

function menuOver(what){
    document.getElementById(what).removeAttribute("hidden");
}

function menuExit(what){
    document.getElementById(what).hidden = "true";
}

var control = 0;
function getpageScroll(){
    var temp = self.pageYOffset;
	//document.getElementById("compt2").innerHTML= temp + ";" + control;
    if ((temp > HauteurBaniere) && (control <= HauteurBaniere)) {
        moveMenu();
    }
    if (temp < HauteurBaniere && control >= HauteurBaniere) {
        fixeMenu();
    };
        control = temp;
}


function moveMenu(){
    var element = document.getElementById("baniere").style;
    element.top = "0px";
    //element.left = "0px",
    element.position = "fixed";
    screenGlue = false;
}

function fixeMenu(){
   var element = document.getElementById("baniere").style;
    element.top= HauteurBaniere + "px";
    element.position = "relative";
    screenGlue = true;
}


function getLargeur(){
    //document.getElementById("compt2").innerHTML =  /*self.pageX*/ window.innerWidth;
    var temp =  window.innerWidth;
    if (temp<=1280){
        HauteurBaniere = Math.floor((temp * 0.3125)-40);
        if (screenGlue = true) {
            document.getElementById("baniere").style.top = HauteurBaniere + "px";
        };
    }else if (temp > 1280) {
        document.getElementById("baniere").style.top = "360px";
    };
}
