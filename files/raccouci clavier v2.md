<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Raccourcis Claviers V2</title>
</head>
<body>

# Mémorandum :<br/><span class="courier">Raccourci clavier</span>

## Vocabulaire

 - Pointeur : c'est la souris
 - Curseur : c'est | , ou _ clignotant ou autre selon l'application
 - Fenêtre : le cadre avec les boutons &nbsp; -- &nbsp; &#9744;&nbsp; &#10005;
 - Onglet : souvent en haut, parfois en bas ou sur le côté, qui permet d'avoir plusieurs vues dans une même fenêtre
 - Application : ensemble cohérent d'outils qui permet d'effectuer une tâche
 - Logiciel : Ensemble d'applications souvent installées sur un poste/PC
 - Serveur : Application qui attend la connexion d'un client pour fournir un service
 - <key>ALT</key> et <key>ALT GR</key> n'ont pas le même comportement ni les mêmes fonctionnalités
 - Presse papier : espace mémoire contenant les éléments copiés

> Dans ce document les touches majuscule sont représentées : <key>&uArr;</key>  
> Les touches entourées de deux flèches &darr;<key>ALT</key>&darr; sont à appuyer et maintenir tout le temps de la manipulation

<!-- La touche "Windows" <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> est représenté par son nom générique : <key>Super</key> -->

## Raccourcis de navigation communs

> Excel ne suit pas la même logique pour les déplacement, CF: chapitre Excel

1. Début <key>&nwarr;</key> : déplace le curseur au début de la ligne (<key>Pos1</key>, <key>Début</key>, <key>Home</key>, <key>Origine</key>)
2. Fin <key>FIN</key> : déplace le curseur à la fin de la ligne
3. <key>&#9651;</key>, <key>&#9661;</key>, <key>&#9665;</key>, <key>&#9655;</key> (touches directionnelles) : déplace le curseur d'un caractère ou d'une ligne
4. <key>&#8670;</key>, <key>&#8671;</key> : déplace le curseur d'une hauteur d'écran, de fenêtre ou de vu (<key>PgUp</key>, <key>PgDn</key>)
5. <key>CTRL</key> + (touche directionnelle gauche ou droite) : déplace le curseur d'un mot

## Sélection

 - <key>CTRL</key> + <key>A</key> : sélectionner tout
 - <key>&uArr;</key> + [raccourci de navigation] : sélectionne entre le point d'origine et la nouvelle position du curseur
 - <key>CTRL</key> + [raccourci de navigation] : déplace le curseur sans sélectionner
 - <key>CTRL</key> + <key class="tab">ESPACE</key> : sélectionne/désélectionne l’élément sous le curseur

## Raccourcis de manipulation communs

- <key>CTRL</key> + <key>Z</key> : annuler la dernière action
- rétablir la dernière action annulée (dépend de l'application) :
    + <key>CTRL</key> + <key>Y</key>
    + <key>CTRL</key> + <key>&uArr;</key> + <key>Z</key>
- <key>CTRL</key> + <key>C</key> : copier (enregistre dans le presse papier)
- <key>CTRL</key> + <key>X</key> : couper (enregistre dans le presse papier, et supprime l'élément sélectionné)
- <key>CTRL</key> + <key>V</key> : coller (le 1e élément du presse papier)
- <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>V</key> : coller un des éléments de l'historique du presse papier (À noter que l’on peut épingler un élément pour le coller plus tard)
- <key>CTRL</key> + <key>S</key> : enregistrer
- <key>CTRL</key> + <key>P</key> : imprimer
- <key>CTRL</key> + <key class="tab">&lrarr;</key> : passe à l'onglet suivant
- <key>CTRL</key> + <key>&uArr;</key> + <key class="tab">&lrarr;</key> : passe à l'onglet précédent

## Raccourcis de manipulation de texte

> Sur une sélection ou sur la position actuelle du curseur

- <key>CTRL</key> + <key>U</key> : souligner ( **U**nderline)
- <key>CTRL</key> + <key>G</key> : mettre en gras
- <key>CTRL</key> + <key>I</key> : mettre en italique
- <key>CTRL</key> + <key>F</key> : Lance une recherche
- <key>CTRL</key> + <key>H</key> : Ouvre le menu de remplacement (certaines applications propose une option nommé Regex ou `.*`, cf: <https://regex101.com/> )


## Excel

### Déplacement

 - <key class="tab">&lrarr;</key> (tabulation) : déplace le curseur d'une case sur la droite
 - <key>&uArr;</key> + <key class="tab">&lrarr;</key> : déplace le curseur d'une case sur la gauche
 - <key>CTRL</key> + <key class="tab">&lrarr;</key> : lorsque plusieurs fenêtres d'Excel sont ouvertes, permet de passer de l'une à l'autre.
 - <key class="enter">&ldsh;</key> : déplace le curseur d'une case en bas

> En se déplaçant avec tabulation, la touche entrée permet d'accéder au début d'une nouvelle ligne de saisie

 - <key>CTRL</key> + (touche directionnelle) : saute jusqu’à la dernière valeur de la ligne ou de la colonne (!! s'arrête à la première case vide), puis jusqu'à la dernière case du document

Tous ces déplacements sont utilisables avec <key>&uArr;</key> pour en faire une sélection

### Sélection

 - <key>CTRL</key> + <key>A</key> : tout sélectionner (le tableau, puis la feuille)
 - <key>CTRL</key> + <key class="tab">ESPACE</key> : étend la sélection à toute/s la/les colonne/s
 - <key>&uArr;</key> + <key class="tab">ESPACE</key> : étend la sélection à toute/s la/les ligne/s
 - <key>CTRL</key> + <key>&uArr;</key> + <key class="tab">ESPACE</key> : équivalent de <key>CTRL</key> + <key>A</key>

### Édition de cellules

- <key>F2</key> : ouvre la saisie rapide de la cellule sous le curseur
- <key>F4</key> : lors de la saisi de coordonnée de cellule, permet de permuter entre relative, absolu, ligne absolu-colonne relative et ligne relative et colonne absolu

> la bible des raccourcis clavier avec Excel : [c'est par ici !]

[c'est par ici !]:https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f "link" target="_blank"

## Navigateur internet

 - <key>CTRL</key> + <key>T</key> : nouvel onglet (new tab)
 - <key>CTRL</key> + <key>&uArr;</key> + <key>T</key> : ouvre le dernier onglet fermé
- <key>CTRL</key> + <key>+</key> : agrandir le texte et les images
- <key>CTRL</key> + <key>-</key> : réduire le texte et les images
- <key>CTRL</key> + <key>0</key> : rétablit la taille du texte et des images par défault
- <key>F5</key> __ou__ <key>CTRL</key> + <key>R</key> : recharge la page
- <key>CTRL</key> + <key>F5</key> : supprime le cache et recharge la page

## Manipulation des fenêtres et bureaux
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key class="tab">&lrarr;</key> : Ouvre le gestionnaire de bureaux
 - &darr;<key>ALT</key>&darr; + ( <key class="tab">&lrarr;</key> * N ) : navigue parmi les fenêtres ouvertes de gauche à droite
 - &darr;<key>ALT</key>&darr; + &darr;<key>&uArr;</key>&darr; + ( <key class="tab">&lrarr;</key> * N ) : Navigue parmi les fenêtres ouvertes de droite à gauche
 - <key>ALT</key> + <key>ÉCHAP</key> : place la fenêtre active derrière toutes les autres
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>M</key> : minimise toutes les fenêtres
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>D</key> : Montre ou cache le bureau
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + (touche directionnelle) : déplace la fenêtre
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>&uArr;</key> + (touche directionnelle droite-gauche) : déplace la fenêtre d'écran en écran
  - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>1</key> **ou** <key>2</key> **ou** <key>3</key>**...** : équivaut à un clic sur l'icône correspondant dans la barre d'application (maintenir <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> et appuyer plusieurs fois sur le même nombre si plusieurs fenêtres d'une même application)
  - Clic molette sur les icônes de la barre d'application ouvre une nouvelle fenêtre
  - Clic molette sur l'aperçu de la barre d'application d'une fenêtre d'une application ferme la fenêtre
 
## Divers système

 - <key>&uArr;</key> + <key>F10</key> : ouvre le menu déroulant à l'emplacement du curseur (= clic droit)
 - <key>F2</key> : renomme l'élément sous le curseur, en cas de sélection multiple : renomme tous éléments en ajoutant un numéro incrémenté selon l'ordre dans lequel ils sont affiché.
 - <key>ÉCHAP</key> : ferme le menu contextuel ouvert, annule la sélection en cours
 - <key>ALT</key> + <key class="tab">espace</key> : ouvre le menu de la fenêtre
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> : ouvre le menu démarrer, taper des lettres pour chercher une application
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>&uArr;</key> + <key>S</key> : prendre une capture d'écran

## Écrire tous les symboles

> Avec Windows 10 et 11 un raccourci clavier à été ajouter ouvrant un pop-up :

<key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>;</key> : comme pour faire le smiley ;-) 😉, permettant la saisi des smiley, symboles et caractères spéciaux n'importe où.

> Avec la touche <key>ALT</key> maintenue enfoncé on tape le code du caractère sur le pavé numérique puis au relâchement de <key>ALT</key> apparaît le symbole désiré

 * Les principaux
    - É : &darr;<key>ALT</key>&darr; + <key>0</key><key>2</key><key>0</key><key>1</key>
    - È : &darr;<key>ALT</key>&darr; + <key>0</key><key>2</key><key>0</key><key>0</key>
    - Ç : &darr;<key>ALT</key>&darr; + <key>0</key><key>1</key><key>9</key><key>9</key>
    - À : &darr;<key>ALT</key>&darr; + <key>0</key><key>1</key><key>9</key><key>2</key>
    - ↑/↓/→/← : &darr;<key>ALT</key>&darr; + <key>2</key><key>4</key> / <key>2</key><key>5</key> / <key>2</key><key>6</key> / <key>2</key><key>7</key>
 * Autres méthodes pour les accents : ^ (circonflexe) et ` (grave)
    - la touche à coté de <key>P</key> &rarr; <key style="display:inline-flex;flex-direction:column;line-height:.7;transform:translateY(-0.3em);padding: 5px 5px 0"><span>¨</span><span>^</span></key> (ou <key>ALT GR</key> + <key>9</key>)
    - La touche <key>ALT GR</key> + <key  style="display:inline-flex;line-height:.7;flex-wrap:wrap;width:1em;transform:translateY(-0.3em);padding: 5px 5px 0"><span>7</span><span> </span><span>è</span><span>`</span></key>
 * Pour tous les autres symboles voire cette fiche : <https://usefulshortcuts.com/downloads/ALT-Codes.pdf>
 

<style type="text/css">
key{
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #000000bb;
  padding: 0 5px;
  color: white;
}
.tab{
  padding-right: 15px;
  padding-left: 15px;
}
.enter{
  height: 50px;
  width: 50px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%, 25% 50%, 0 50%)
}
body{
  -webkit-print-color-adjust: exact; /*chrome & webkit browsers*/
  color-adjust: exact; /*firefox & IE */
}
h1{
  text-align: center;
}
.courier{
  font-family: courier;
}
</style>
<style type="text/css">
body {
  font-family: Helvetica, arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  padding: 30px; }
body > *:first-child {
  margin-top: 0 !important; }
body > *:last-child {
  margin-bottom: 0 !important; }
a {
  color: #4183C4; }
a.absent {
  color: #cc0000; }
a.anchor {
  display: block;
  padding-left: 30px;
  margin-left: -30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0; }
h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  cursor: text;
  position: relative; }
h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {
  text-decoration: none; }
h1 tt, h1 code {
  font-size: inherit; }
h2 tt, h2 code {
  font-size: inherit; }
h3 tt, h3 code {
  font-size: inherit; }
h4 tt, h4 code {
  font-size: inherit; }
h5 tt, h5 code {
  font-size: inherit; }
h6 tt, h6 code {
  font-size: inherit; }
h1 {
  font-size: 28px;
  color: black; }
h2 {
  font-size: 24px;
  border-bottom: 1px solid #cccccc;
  color: black; }
h3 {
  font-size: 18px; }
h4 {
  font-size: 16px; }
h5 {
  font-size: 14px; }
h6 {
  color: #777777;
  font-size: 14px; }
p, blockquote, ul, ol, dl, li, table, pre {
  margin: 15px 0; }
hr {
  border: 0 none;
  color: #cccccc;
  height: 4px;
  padding: 0;
}
body > h2:first-child {
  margin-top: 0;
  padding-top: 0; }
body > h1:first-child {
  margin-top: 0;
  padding-top: 0; }
body > h1:first-child + h2 {
  margin-top: 0;
  padding-top: 0; }
body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
  margin-top: 0;
  padding-top: 0; }
a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
  margin-top: 0;
  padding-top: 0; }
h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
  margin-top: 0; }
li p.first {
  display: inline-block; }
li {
  margin: 0; }
ul, ol {
  padding-left: 30px; }
ul :first-child, ol :first-child {
  margin-top: 0; }
dl {
  padding: 0; }
dl dt {
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  padding: 0;
  margin: 15px 0 5px; }
dl dt:first-child {
  padding: 0; }
dl dt > :first-child {
  margin-top: 0; }
dl dt > :last-child {
  margin-bottom: 0; }
dl dd {
  margin: 0 0 15px;
  padding: 0 15px; }
dl dd > :first-child {
  margin-top: 0; }
dl dd > :last-child {
  margin-bottom: 0; }
blockquote {
  border-left: 4px solid #dddddd;
  padding: 0 15px;
  color: #777777; }
blockquote > :first-child {
  margin-top: 0; }
blockquote > :last-child {
  margin-bottom: 0; }
table {
  padding: 0;border-collapse: collapse; }
table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0; }
table tr:nth-child(2n) {
  background-color: #f8f8f8; }
table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  margin: 0;
  padding: 6px 13px; }
table tr td {
  border: 1px solid #cccccc;
  margin: 0;
  padding: 6px 13px; }
table tr th :first-child, table tr td :first-child {
  margin-top: 0; }
table tr th :last-child, table tr td :last-child {
  margin-bottom: 0; }
img {
  max-width: 100%; }
span.frame {
  display: block;
  overflow: hidden; }
span.frame > span {
  border: 1px solid #dddddd;
  display: block;
  float: left;
  overflow: hidden;
  margin: 13px 0 0;
  padding: 7px;
  width: auto; }
span.frame span img {
  display: block;
  float: left; }
span.frame span span {
  clear: both;
  color: #333333;
  display: block;
  padding: 5px 0 0; }
span.align-center {
  display: block;
  overflow: hidden;
  clear: both; }
span.align-center > span {
  display: block;
  overflow: hidden;
  margin: 13px auto 0;
  text-align: center; }
span.align-center span img {
  margin: 0 auto;
  text-align: center; }
span.align-right {
  display: block;
  overflow: hidden;
  clear: both; }
span.align-right > span {
  display: block;
  overflow: hidden;
  margin: 13px 0 0;
  text-align: right; }
span.align-right span img {
  margin: 0;
  text-align: right; }
span.float-left {
  display: block;
  margin-right: 13px;
  overflow: hidden;
  float: left; }
span.float-left span {
  margin: 13px 0 0; }
span.float-right {
  display: block;
  margin-left: 13px;
  overflow: hidden;
  float: right; }
span.float-right > span {
  display: block;
  overflow: hidden;
  margin: 13px auto 0;
  text-align: right; }
code, tt {
  margin: 0 2px;
  padding: 0 5px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px; }
pre code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent; }
.highlight pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }
pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }
pre code, pre tt {
  background-color: transparent;
  border: none; }
sup {
  font-size: 0.83em;
  vertical-align: super;
  line-height: 0;
}
* {
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
@media screen and (min-width: 914px) {
  body {
  width: 854px;
  margin:0 auto;
  }
}
@media print {
  table, pre {
    page-break-inside: avoid;
  }
  pre {
    word-wrap: break-word;
  }
}
</style>
</body>
</html>