window.onscroll = getpageScroll;
window.onresize = getLargeur;
var HauteurBanniere = 360;
var screenGlue = false;

var control = 0;
function getpageScroll(){
    var temp = self.pageYOffset;
    if ((temp > HauteurBanniere) && (control <= HauteurBanniere)) {
        moveMenu();
    }
    if (temp < HauteurBanniere && control >= HauteurBanniere) {
        fixeMenu();
    };
        control = temp;
}

function moveMenu(){
    var element = document.getElementById("banniere").style;
    element.top = "0px";
    element.position = "fixed";
    screenGlue = false;
}

function fixeMenu(){
   var element = document.getElementById("banniere").style;
    element.top= HauteurBanniere + "px";
    element.position = "relative";
    screenGlue = true;
}

function getLargeur(){
    document.getElementById("compt2").innerHTML =  /*self.pageX*/ window.innerWidth;
    var temp2 =  window.innerWidth;
    if (temp2 <= 1280){
        HauteurBanniere = Math.floor((temp2 * 0.3125)-40);
        if (screenGlue = true) {
            document.getElementById("banniere").style.top = HauteurBanniere + "px";
        };
    }else if (temp2 > 1280) {
        HauteurBanniere = 360;
        document.getElementById("banniere").style.top = "360px";
        document.getElementById("banniere").style.position = "relative";
    };
}
