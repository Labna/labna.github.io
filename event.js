/*
var button = document.getElementById('button');
button.onclick= fonction(){
    alert("one click");
}

*/
window.onscroll = getpageScroll;
/*alert(typeof self.pageYOffset);


/*function openNewWindow(){
    window.alert("coucou");
}*/

function menuOver(what){
    document.getElementById(what).removeAttribute("hidden");
}

function menuExit(what){
    document.getElementById(what).hidden = "true";
}

var control = 0;
function getpageScroll(){
    var temp = self.pageYOffset;
	document.getElementById("compt2").innerHTML= temp + ";" + control;
    if ((temp > 340) && (control <= 340)) {
        document.getElementByClassName("profil").style.position = "fixed";
    }
        control = temp;
}


function moveMenu(){
    /*document.getElementById("temoin").innerHTML = self.pageYOffset;
    /*if (self.pageYOffset >=340 && control == 0){
        document.getElementByClassName("profil").style.position = "fixed";
        document.getElementByClassName("profil").style.bottom = "0px";
        control = 1;
    }*/
}

/*
onresize(){
    alert("tu bouges la page !!");
}

function affcacher(menu, idDiv){
    var div = document.getElementById(idDiv);
    menu.style.color = "blue";
    if (div.style.visibility == "visible")
        div.style.visibility = "hidden";
    else
        div.style.display = "visible";
    /*if (div.hidden = "true")
        div.hidden = "false";
    else
        div.hidden = "true";
    
}
*/





/*

bgcolor='#000000';
bgcolor2='#7B7B7B';
document.write('<style type="text/css">');
document.write('.popper { POSITION: absolute; VISIBILITY: hidden; z-index:3; }')
document.write('#topgauche { position:absolute;  z-index:10; }')
document.write('A:hover.ejsmenu {color:#000000; text-decoration:none;}')
document.write('A.ejsmenu {color:#000000; text-decoration:none;}')
document.write('</style>')
document.write('<div style="position:relative;height:25"><DIV class=popper id=topdeck></DIV>');
/*
SCRIPT EDITE SUR L'EDITEUR JAVACSRIPT
http://www.editeurjavascript.com
*/

/*
LIENS
*/

/*
zlien = new Array;
zlien[0] = new Array;
zlien[1] = new Array;
zlien[2] = new Array;
zlien[0][0] = '<A HREF="#" CLASS=ejsmenu>profil</A>';
zlien[0][1] = '<A HREF="#" CLASS=ejsmenu>paramètres</A>';
zlien[0][2] = '<A HREF="#" CLASS=ejsmenu>deconnexion</A>';
zlien[1][0] = '<A HREF="#" CLASS=ejsmenu>Home</A>';
zlien[2][0] = '<A HREF="#" CLASS=ejsmenu>contact</A>';
var nava = (document.layers);
var dom = (document.getElementById);
var iex = (document.all);
if (nava) { skn = document.topdeck }
else if (dom) { skn = document.getElementById("topdeck").style }
else if (iex) { skn = topdeck.style }
skn.top = 24;

function pop(msg,pos)
{
skn.visibility = "hidden";
a=true
skn.left = pos;
var content ="<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=150><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=1>";
pass = 0
while (pass < msg.length)
	{
	content += "<TR><TD BGCOLOR="+bgcolor+" onMouseOver=\"this.style.background='"+bgcolor2+"'\" onMouseOut=\"this.style.background='"+bgcolor+"'\" HEIGHT=20><FONT SIZE=1 FACE=\"Verdana\">&nbsp;&nbsp;"+msg[pass]+"</FONT></TD></TR>";
	pass++;
	}
content += "</TABLE></TD></TR></TABLE>";
if (nava)
  {
    skn.document.write(content);
	  skn.document.close();
	  skn.visibility = "visible";
  }
    else if (dom)
  {
	  document.getElementById("topdeck").innerHTML = content;
	  skn.visibility = "visible";
  }
    else if (iex)
  {
	  document.all("topdeck").innerHTML = content;
	  skn.visibility = "visible";
  }
}
function kill()
{
	skn.visibility = "hidden";
}
document.onclick = kill;
document.write('<DIV ID=topgauche><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=300><TR><TD><TABLE CELLPADING=0 CELLSPACING=1 BORDER=0 WIDTH=100% HEIGHT=25><TR>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[0],0)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[0],0)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">profil</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[1],100)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[1],100)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">home</FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[2],200)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[2],200)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana">contact</FONT></a></TD>')
document.write('</TR></TABLE></TD></TR></TABLE></DIV></div>')


/**/